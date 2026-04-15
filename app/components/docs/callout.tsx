import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";
import type * as React from "react";
import { cn } from "~/lib/utils";

const calloutVariants = {
  note: {
    icon: Info,
    className:
      "border-blue-500/20 bg-blue-500/10 text-blue-500 dark:border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-400",
  },
  info: {
    icon: Info,
    className:
      "border-blue-500/20 bg-blue-500/10 text-blue-500 dark:border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-400",
  },
  tip: {
    icon: CheckCircle,
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-500 dark:border-emerald-500/30 dark:bg-emerald-500/20 dark:text-emerald-400",
  },
  warning: {
    icon: AlertTriangle,
    className:
      "border-amber-500/20 bg-amber-500/10 text-amber-500 dark:border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-400",
  },
  danger: {
    icon: AlertCircle,
    className:
      "border-red-500/20 bg-red-500/10 text-red-500 dark:border-red-500/30 dark:bg-red-500/20 dark:text-red-400",
  },
};

type CalloutType = keyof typeof calloutVariants;

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

function Callout({ type = "note", title, children }: CalloutProps) {
  const variant = calloutVariants[type];
  const Icon = variant.icon;

  return (
    <div
      className={cn("my-6 flex gap-3 rounded-lg border p-4", variant.className)}
    >
      <Icon className="mt-0.5 size-5 shrink-0" />
      <div className="flex-1">
        {title && <h4 className="mb-2 font-semibold">{title}</h4>}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}

export { Callout };
