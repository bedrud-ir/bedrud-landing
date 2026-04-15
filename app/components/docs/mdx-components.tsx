import { MDXProvider } from "@mdx-js/react";
import type * as React from "react";
import { Link, useParams } from "react-router";
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
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <Separator className="my-6" {...props} />
  ),
};

function MdxLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { lang } = useParams<{ lang: string }>();

  if (href?.startsWith("/")) {
    const targetHref =
      lang && !href.startsWith(`/${lang}/`)
        ? `/${lang}${href.replace(/^\/[a-z]{2}(\/|$)/, "/")}`
        : href;

    return (
      <Link to={targetHref} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={{ ...components, a: MdxLink }}>
      {children}
    </MDXProvider>
  );
}

function MdxContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="mdx prose prose-zinc max-w-none dark:prose-invert">
      {children}
    </div>
  );
}

function Mdx({ children }: { children: React.ReactNode }) {
  return (
    <MdxProvider>
      <MdxContent>{children}</MdxContent>
    </MdxProvider>
  );
}

export { Mdx, MdxProvider };
