import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { getSupabase, setSharedSession, getSharedSession, clearSharedSession } from '../utils/supabase';
import { ADMIN_EMAILS } from '../config/admin';
import type { User, Session } from '@supabase/supabase-js';
import { useIdleTimeout } from '../hooks/useIdleTimeout';

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  getUserName: () => string;
  getUserAvatar: () => string;
  getUserInitial: () => string;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(async ({ data: { session } }: { data: { session: Session | null } }) => {
      if (!session) {
        const rt = getSharedSession();
        if (rt) {
          try {
            const { data } = await supabase!.auth.refreshSession({ refresh_token: rt });
            if (data.session) {
              setUser(data.session.user ?? null);
            } else {
              clearSharedSession();
              setUser(null);
            }
          } catch {
            clearSharedSession();
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } else {
        setUser(session.user ?? null);
        if (session.refresh_token) setSharedSession(session.refresh_token);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
        // SSO: 쿠키 동기화
        if (session?.refresh_token) setSharedSession(session.refresh_token);
        if (_event === 'SIGNED_OUT') clearSharedSession();
      }
    );

    const timeout = setTimeout(() => setLoading(false), 5000);


  // 10분 무동작 세션 타임아웃
  useIdleTimeout({
    enabled: !!user,
    onTimeout: () => {
      clearSharedSession();
    },
  });

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  const getUserName = () => {
    if (!user) return '';
    return user.user_metadata?.full_name
      || user.user_metadata?.name
      || user.email?.split('@')[0]
      || '사용자';
  };

  const getUserAvatar = () => {
    if (!user) return '';
    return user.user_metadata?.avatar_url
      || user.user_metadata?.picture
      || '';
  };

  const getUserInitial = () => {
    const name = getUserName();
    return name.charAt(0).toUpperCase();
  };

  const isAdmin = ADMIN_EMAILS.includes(user?.email?.toLowerCase() || '');

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      getUserName,
      getUserAvatar,
      getUserInitial,
      isAuthenticated: !!user,
      isAdmin,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
