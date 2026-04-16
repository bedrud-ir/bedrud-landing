import { Check, Minus, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { type Locale, t } from "../../i18n/utils";

type CellValue = string | boolean;

const rows = [
  "deploy",
  "ram",
  "install",
  "nativeClients",
  "guestJoin",
  "audioProcessing",
  "license",
] as const;

type CellStatus = "win" | "neutral" | "lose" | "partial";

function ValueCell({
  value,
  status,
}: {
  value: CellValue;
  status: CellStatus;
}) {
  if (value === true)
    return <Check className="size-4 text-emerald-500" strokeWidth={2} />;
  if (value === false)
    return <X className="size-4 text-muted-foreground/40" strokeWidth={2} />;
  if (value === "partial")
    return <Minus className="size-4 text-amber-500" strokeWidth={2} />;

  const iconMap: Record<CellStatus, React.ReactNode> = {
    win: (
      <Check className="size-3.5 shrink-0 text-emerald-500" strokeWidth={2.5} />
    ),
    neutral: (
      <Minus
        className="size-3.5 shrink-0 text-muted-foreground/50"
        strokeWidth={2}
      />
    ),
    partial: (
      <Minus className="size-3.5 shrink-0 text-amber-500" strokeWidth={2} />
    ),
    lose: (
      <X
        className="size-3.5 shrink-0 text-muted-foreground/40"
        strokeWidth={2.5}
      />
    ),
  };

  return (
    <span className="inline-flex items-center gap-2.5">
      {iconMap[status]}
      <span>{value}</span>
    </span>
  );
}

const cellStatuses: Record<
  (typeof rows)[number],
  { bedrud: CellStatus; jitsi: CellStatus; bbb: CellStatus }
> = {
  deploy: { bedrud: "win", jitsi: "lose", bbb: "lose" },
  ram: { bedrud: "win", jitsi: "lose", bbb: "lose" },
  install: { bedrud: "win", jitsi: "partial", bbb: "lose" },
  nativeClients: { bedrud: "win", jitsi: "win", bbb: "lose" },
  guestJoin: { bedrud: "win", jitsi: "win", bbb: "lose" },
  audioProcessing: { bedrud: "win", jitsi: "neutral", bbb: "neutral" },
  license: { bedrud: "win", jitsi: "win", bbb: "partial" },
};

export function ComparisonSection({ lang }: { lang: Locale }) {
  return (
    <section
      id="comparison"
      className="relative scroll-mt-20 border-t bg-muted/30 section-y"
    >
      <div className="section-container">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t(lang, "comparison.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(lang, "comparison.subtitle")}
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="min-w-[140px] sticky left-0 z-10 bg-background border-e border-border">
                  {t(lang, "comparison.feature")}
                </TableHead>
                <TableHead className="font-semibold text-foreground">
                  {t(lang, "comparison.bedrud")}
                </TableHead>
                <TableHead>{t(lang, "comparison.jitsi")}</TableHead>
                <TableHead>{t(lang, "comparison.bbb")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row}>
                  <TableCell className="font-medium sticky left-0 z-10 bg-background border-e border-border">
                    {t(lang, `comparison.rows.${row}`)}
                  </TableCell>
                  <TableCell className="font-semibold bg-primary/[0.07] border-s-2 border-primary/20">
                    <ValueCell
                      value={t(lang, `comparison.rows.${row}Bedrud`)}
                      status={cellStatuses[row].bedrud}
                    />
                  </TableCell>
                  <TableCell>
                    <ValueCell
                      value={t(lang, `comparison.rows.${row}Jitsi`)}
                      status={cellStatuses[row].jitsi}
                    />
                  </TableCell>
                  <TableCell>
                    <ValueCell
                      value={t(lang, `comparison.rows.${row}Bbb`)}
                      status={cellStatuses[row].bbb}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
