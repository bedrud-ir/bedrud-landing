import { Check, Minus, X } from "lucide-react";
import { t, type Locale } from "../../i18n/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

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

function ValueCell({ value }: { value: CellValue }) {
  if (value === true)
    return <Check className="size-4 text-emerald-500" strokeWidth={2} />;
  if (value === false)
    return <X className="size-4 text-muted-foreground/40" strokeWidth={2} />;
  if (value === "partial")
    return <Minus className="size-4 text-amber-500" strokeWidth={2} />;
  return <span>{value}</span>;
}

export function ComparisonSection({ lang }: { lang: Locale }) {
  return (
    <section
      id="comparison"
      className="scroll-mt-20 border-t bg-muted/30 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
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
                <TableHead className="w-[180px]">
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
                  <TableCell className="font-medium">
                    {t(lang, `comparison.rows.${row}`)}
                  </TableCell>
                  <TableCell>
                    <ValueCell
                      value={t(lang, `comparison.rows.${row}Bedrud`)}
                    />
                  </TableCell>
                  <TableCell>
                    <ValueCell value={t(lang, `comparison.rows.${row}Jitsi`)} />
                  </TableCell>
                  <TableCell>
                    <ValueCell value={t(lang, `comparison.rows.${row}Bbb`)} />
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
