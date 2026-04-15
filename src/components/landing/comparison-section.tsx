import { Check, Minus, X } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
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

export function ComparisonSection() {
  const { t } = useTranslation();

  return (
    <section
      id="comparison"
      className="scroll-mt-20 border-t bg-muted/30 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-lg">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {t("comparison.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            {t("comparison.subtitle")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-14 overflow-hidden rounded-xl border"
        >
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[180px]">
                  {t("comparison.feature")}
                </TableHead>
                <TableHead className="font-semibold text-foreground">
                  {t("comparison.bedrud")}
                </TableHead>
                <TableHead>{t("comparison.jitsi")}</TableHead>
                <TableHead>{t("comparison.bbb")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row}>
                  <TableCell className="font-medium">
                    {t(`comparison.rows.${row}`)}
                  </TableCell>
                  <TableCell>
                    <ValueCell value={t(`comparison.rows.${row}Bedrud`)} />
                  </TableCell>
                  <TableCell>
                    <ValueCell value={t(`comparison.rows.${row}Jitsi`)} />
                  </TableCell>
                  <TableCell>
                    <ValueCell value={t(`comparison.rows.${row}Bbb`)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
}
