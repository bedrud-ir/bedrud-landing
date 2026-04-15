import { GITHUB_REPO } from "./config";

const BASE = "https://api.github.com";
const TTL = 30 * 60 * 1000;
const cache = new Map<string, { data: unknown; at: number }>();

async function fetchJSON<T>(path: string): Promise<T | null> {
  const key = path;
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL) return hit.data as T;

  try {
    const res = await fetch(`${BASE}${path}`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return (hit?.data as T) ?? null;
    const data = (await res.json()) as T;
    cache.set(key, { data, at: Date.now() });
    return data;
  } catch {
    return (hit?.data as T) ?? null;
  }
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

export async function fetchRepoInfo() {
  return fetchJSON<GitHubRepo>(`/repos/${GITHUB_REPO}`);
}

interface GitHubRelease {
  tag_name: string;
  published_at: string;
  body: string;
  html_url: string;
}

export async function fetchReleases(count = 10) {
  return fetchJSON<GitHubRelease[]>(
    `/repos/${GITHUB_REPO}/releases?per_page=${count}`,
  );
}

interface GitHubContributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export async function fetchContributors(count = 50) {
  return fetchJSON<GitHubContributor[]>(
    `/repos/${GITHUB_REPO}/contributors?per_page=${count}`,
  );
}
