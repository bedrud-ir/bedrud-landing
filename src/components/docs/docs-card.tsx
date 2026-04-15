import type * as React from "react";
import { cn } from "~/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

function Card({ children, className, href }: CardProps) {
  const content = (
    <div
      className={cn(
        "group relative rounded-lg border bg-card p-6 text-card-foreground transition-all hover:border-primary/50 hover:shadow-md",
        href && "cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}

function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("mt-2 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export { Card, CardTitle, CardDescription };
