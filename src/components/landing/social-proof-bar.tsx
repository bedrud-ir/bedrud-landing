import { Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchRepoInfo } from "~/lib/github";

interface RepoInfo {
  stargazers_count: number;
  forks_count: number;
}

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export function SocialProofBar() {
  const { t } = useTranslation();
  const [info, setInfo] = useState<RepoInfo | null>(null);

  useEffect(() => {
    fetchRepoInfo().then((data) => {
      if (data) setInfo(data);
    });
  }, []);

  const stars = info ? formatCount(info.stargazers_count) : t("hero.stars");

  return (
    <section className="border-t px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Star className="size-4 fill-amber-400 text-amber-400" />
          <span className="font-medium text-foreground">{stars}</span>
          <span>{t("hero.starsLabel")}</span>
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-1.5">
          <Users className="size-4" />
          <span>{t("hero.contributorsLabel")}</span>
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-1.5">
          <div className="size-2 rounded-full bg-emerald-500" />
          <span>{t("hero.license")}</span>
        </div>
      </div>
    </section>
  );
}
