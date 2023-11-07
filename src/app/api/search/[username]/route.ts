import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, context: { params: { username: string } }) {
  try {
    const res = await fetch(`https://api.github.com/search/${context.params.username}`);
    if (res.ok) {
      const response: UsersSearchResultType = await res.json();
      return new Response(JSON.stringify({ response }));
    }
  } catch {
    // todo: error handling
  }

  return new Response(JSON.stringify('Error occured'));
}

export interface UsersSearchResultType {
  total_count: number;
  incomplete_results: boolean;
  items?: GithubUserType[] | null;
}
export interface GithubUserType {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}
