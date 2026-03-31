/**
 * communityStorage.js
 * 커뮤니티 게시판 CRUD — Supabase prs_* 테이블
 */

import getSupabase from './supabase';

// ── Posts ──

export async function getPosts({ category, page = 1, limit = 12 } = {}) {
  const client = getSupabase();
  if (!client) return { data: [], count: 0 };

  let query = client
    .from('prs_posts')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (category) query = query.eq('category', category);

  const { data, error, count } = await query;
  if (error) {
    console.error('getPosts error:', error);
    return { data: [], count: 0 };
  }
  return { data: data || [], count: count || 0 };
}

export async function getPost(id) {
  const client = getSupabase();
  if (!client) return null;

  // increment view count
  await client.rpc('prs_increment_view_count', { p_id: Number(id) });

  const { data, error } = await client
    .from('prs_posts')
    .select('*')
    .eq('id', Number(id))
    .single();

  if (error) {
    console.error('getPost error:', error);
    return null;
  }
  return data;
}

export async function createPost({ category, title, content, authorId }) {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('prs_posts')
    .insert({ category, title, content, author_id: authorId })
    .select()
    .single();

  if (error) {
    console.error('createPost error:', error);
    return null;
  }
  return data;
}

export async function updatePost(id, { title, content }) {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('prs_posts')
    .update({ title, content })
    .eq('id', Number(id))
    .select()
    .single();

  if (error) {
    console.error('updatePost error:', error);
    return null;
  }
  return data;
}

export async function deletePost(id) {
  const client = getSupabase();
  if (!client) return false;

  const { error } = await client
    .from('prs_posts')
    .delete()
    .eq('id', Number(id));

  if (error) {
    console.error('deletePost error:', error);
    return false;
  }
  return true;
}

// ── Comments ──

export async function getComments(postId) {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('prs_comments')
    .select('*')
    .eq('post_id', Number(postId))
    .order('created_at', { ascending: true });

  if (error) {
    console.error('getComments error:', error);
    return [];
  }
  return data || [];
}

export async function createComment({ postId, content, authorId }) {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('prs_comments')
    .insert({ post_id: postId, content, author_id: authorId })
    .select()
    .single();

  if (error) {
    console.error('createComment error:', error);
    return null;
  }
  return data;
}

export async function deleteComment(id) {
  const client = getSupabase();
  if (!client) return false;

  const { error } = await client
    .from('prs_comments')
    .delete()
    .eq('id', Number(id));

  if (error) {
    console.error('deleteComment error:', error);
    return false;
  }
  return true;
}

// ── Likes ──

export async function toggleLike(postId, userId) {
  const client = getSupabase();
  if (!client) return null;

  // check existing
  const { data: existing } = await client
    .from('prs_post_likes')
    .select('post_id')
    .eq('post_id', Number(postId))
    .eq('user_id', userId)
    .maybeSingle();

  if (existing) {
    await client
      .from('prs_post_likes')
      .delete()
      .eq('post_id', Number(postId))
      .eq('user_id', userId);
    return false; // unliked
  } else {
    await client
      .from('prs_post_likes')
      .insert({ post_id: Number(postId), user_id: userId });
    return true; // liked
  }
}

export async function getUserLikes(userId) {
  const client = getSupabase();
  if (!client) return new Set();

  const { data } = await client
    .from('prs_post_likes')
    .select('post_id')
    .eq('user_id', userId);

  return new Set((data || []).map(d => d.post_id));
}
