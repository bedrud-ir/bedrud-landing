import { Search as SearchIcon, X } from "lucide-react";
import MiniSearch from "minisearch";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

interface SearchResult {
  id: string;
  title: string;
  description: string;
}

interface SearchProps {
  lang: string;
  className?: string;
  placeholder: string;
  buttonText: string;
  noResultsText: string;
  loadingText: string;
}

export function Search({
  lang,
  className,
  placeholder,
  buttonText,
  noResultsText,
  loadingText,
}: SearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const [indexLoaded, setIndexLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchIndexRef = useRef<MiniSearch | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    async function loadIndex() {
      if (indexLoaded || loading) return;
      setLoading(true);
      try {
        const response = await fetch(`/search-index-${lang}.json`);
        if (!response.ok) throw new Error("Failed to load search index");
        const json = await response.json();
        searchIndexRef.current = MiniSearch.loadJS(json, {
          fields: ["title", "description", "text"],
          storeFields: ["title", "description"],
          idField: "id",
          searchOptions: {
            boost: { title: 3, description: 2 },
            fuzzy: 0.2,
            prefix: true,
          },
        });
        setIndexLoaded(true);
      } catch (err) {
        console.error("Error loading search index:", err);
      } finally {
        setLoading(false);
      }
    }

    if (open || query.length > 0) {
      loadIndex();
    }
  }, [open, query, indexLoaded, loading, lang]);

  useEffect(() => {
    if (!searchIndexRef.current || !query) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      try {
        if (searchIndexRef.current) {
          const searchResults = searchIndexRef.current.search(query, {
            prefix: true,
            fuzzy: 0.2,
          }) as unknown as SearchResult[];
          setResults(searchResults);
          setSelectedIndex(0);
        }
      } catch (err) {
        console.error("Search error:", err);
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
      if (open && results.length > 0) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter" && selectedIndex >= 0) {
          e.preventDefault();
          itemRefs.current[selectedIndex]?.click();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, results, selectedIndex]);

  useEffect(() => {
    if (selectedIndex >= 0 && itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const hasResults = results.length > 0;
  const hasQuery = query.length > 0;

  const inputElement = (
    <div className={cn("relative", className)}>
      <SearchIcon
        className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
        aria-hidden="true"
      />
      <Input
        ref={inputRef}
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="ps-9 border-0 focus-visible:ring-2 focus-visible:ring-ring"
      />
      {hasQuery && (
        <button
          type="button"
          onClick={() => setQuery("")}
          className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          aria-label="Clear search"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 [&>button]:hidden">
          <DialogTitle className="sr-only">{placeholder}</DialogTitle>
          <div className="flex flex-col">
            {inputElement}
            <div
              ref={resultsRef}
              className="mt-2 max-h-96 overflow-y-auto px-1"
              role="listbox"
              aria-label="Search results"
            >
              {hasResults && (
                <div className="space-y-1">
                  {results.map((result, i) => (
                    <a
                      key={result.id}
                      ref={(el) => {
                        itemRefs.current[i] = el;
                      }}
                      href={`/${lang}/docs/${result.id}`}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm transition-colors",
                        i === selectedIndex
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                      )}
                      role="option"
                      aria-selected={i === selectedIndex}
                      onClick={() => setOpen(false)}
                    >
                      <div className="font-medium">{result.title}</div>
                      {result.description && (
                        <div className="mt-0.5 text-xs text-muted-foreground">
                          {result.description}
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              )}
              {hasQuery && !hasResults && !loading && (
                <div className="px-3 py-2 text-sm text-muted-foreground">
                  {noResultsText}
                </div>
              )}
              {loading && (
                <div className="px-3 py-2 text-sm text-muted-foreground">
                  {loadingText}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden lg:flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label="Search documentation"
      >
        <SearchIcon className="size-4" aria-hidden="true" />
        <span>{buttonText}</span>
        <kbd className="ms-auto rounded bg-muted px-1.5 py-0.5 text-xs">
          ⌘&nbsp;K
        </kbd>
      </button>
    </>
  );
}
