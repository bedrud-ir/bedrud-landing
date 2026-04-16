import { Quote } from "lucide-react";
import { type Locale, t } from "../../i18n/utils";

const testimonials = [
  { key: "one" },
  { key: "two" },
  { key: "three" },
] as const;

export function TestimonialsSection({ lang }: { lang: Locale }) {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 border-t bg-muted/30 section-y"
    >
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t(lang, "testimonials.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(lang, "testimonials.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ key }) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-7 transition-colors duration-300 hover:border-border/80 sm:p-8"
            >
              <Quote className="size-5 text-primary/40" strokeWidth={1.5} />
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                &ldquo;{t(lang, `testimonials.${key}.quote`)}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t(lang, `testimonials.${key}.initials`)}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">
                    {t(lang, `testimonials.${key}.name`)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t(lang, `testimonials.${key}.role`)}
                  </p>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
