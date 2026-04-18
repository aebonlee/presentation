import { getSupabase } from './supabase';
import type { AuthChangeEvent, Session } from '@supabase/supabase-js';

const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;

export const signInWithGoogle = async () => {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase가 설정되지 않았습니다.');

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${siteUrl}/`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  if (error) throw error;
  return data;
};

export const signInWithKakao = async () => {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase가 설정되지 않았습니다.');

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: `${siteUrl}/`,
      scopes: 'profile_nickname profile_image account_email',
    },
  });

  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase가 설정되지 않았습니다.');

  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentUser = async () => {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const onAuthStateChange = (callback: (event: AuthChangeEvent, session: Session | null) => void) => {
  const supabase = getSupabase();
  if (!supabase) return { data: { subscription: { unsubscribe: () => {} } } };

  return supabase.auth.onAuthStateChange(callback);
};

/** 프로필 업데이트 */
export async function updateProfile(
  userId: string,
  updates: Record<string, unknown>
): Promise<any> {
  const client = getSupabase();
  if (!client) return null;
  const { data, error } = await client
    .from('user_profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();
  if (error) throw error;
  return data;
}
