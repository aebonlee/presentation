import { getSupabase } from './supabase';

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

export const onAuthStateChange = (callback) => {
  const supabase = getSupabase();
  if (!supabase) return { data: { subscription: { unsubscribe: () => {} } } };

  return supabase.auth.onAuthStateChange(callback);
};
