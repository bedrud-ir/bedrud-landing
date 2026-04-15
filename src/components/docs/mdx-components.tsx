import type * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";
import { Callout } from "./callout";
import { Card, CardDescription, CardTitle } from "./docs-card";
import { MermaidDiagram } from "./mermaid";
import { CreateAdmin } from "./partials/create-admin";
import { InstallerSteps } from "./partials/installer-steps";
import { SystemdServices } from "./partials/systemd-services";

function CodeBlock({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement> & {
  children?: React.ReactNode;
}) {
  const match = /language-(\w+)/.exec(className || "");

  if (match && match[1] === "mermaid" && typeof children === "string") {
    return <MermaidDiagram>{children}</MermaidDiagram>;
  }

  return (
    <pre
      className={cn("p-4 bg-muted rounded-md overflow-x-auto", className)}
      {...props}
    >
      {children}
    </pre>
  );
}

function MdxLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

const components = {
  Callout,
  Card,
  CardTitle,
  CardDescription,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Badge,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  MermaidDiagram,
  InstallerSteps,
  SystemdServices,
  CreateAdmin,
  pre: CodeBlock,
  a: MdxLink,
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <Separator className="my-6" {...props} />
  ),
};

function MdxContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="mdx prose prose-zinc max-w-none dark:prose-invert">
      {children}
    </div>
  );
}

export { components, MdxContent, MdxLink, CodeBlock };
