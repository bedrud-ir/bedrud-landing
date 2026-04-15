import { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";

interface MermaidDiagramProps {
  children: string;
  className?: string;
}

export function MermaidDiagram({ children, className }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const renderMermaid = async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        await mermaid.initialize({
          startOnLoad: true,
          theme: "dark",
          securityLevel: "loose",
        });

        const { svg } = await mermaid.render(`mermaid-${Date.now()}`, children);
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (error) {
        console.error("Mermaid render error:", error);
        if (ref.current) {
          ref.current.innerHTML = `<pre class="p-4 bg-muted rounded-md overflow-x-auto"><code>${children}</code></pre>`;
        }
      }
    };

    renderMermaid();
  }, [children]);

  return (
    <div className={cn("my-6", className)}>
      <div ref={ref} className="flex justify-center">
        <div className="animate-pulse text-muted-foreground">
          Loading diagram...
        </div>
      </div>
    </div>
  );
}
