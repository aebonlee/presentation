import { createContext, useContext, useState, useEffect } from 'react';
import { getSupabase } from '../utils/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    const timeout = setTimeout(() => setLoading(false), 5000);

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

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      getUserName,
      getUserAvatar,
      getUserInitial,
      isAuthenticated: !!user,
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
