"use client";

import type { LucideIcon } from "lucide-react";
import { Terminal, TrendingUp, UserPlus, Video } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";
import { type Locale, t } from "../../i18n/utils";
import { InviteMockup } from "./step-visuals/invite-mockup";
import { MeetingMockup } from "./step-visuals/meeting-mockup";
import { ScaleMockup } from "./step-visuals/scale-mockup";
import { TerminalMockup } from "./step-visuals/terminal-mockup";

interface Step {
  key: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  dotColor: string;
  glowColor: string;
}

const steps: Step[] = [
  {
    key: "install",
    icon: Terminal,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10 dark:bg-blue-500/15",
    dotColor: "bg-blue-500",
    glowColor: "shadow-[0_0_12px_rgba(59,130,246,0.5)]",
  },
  {
    key: "invite",
    icon: UserPlus,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    dotColor: "bg-emerald-500",
    glowColor: "shadow-[0_0_12px_rgba(16,185,129,0.5)]",
  },
  {
    key: "meet",
    icon: Video,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/10 dark:bg-violet-500/15",
    dotColor: "bg-violet-500",
    glowColor: "shadow-[0_0_12px_rgba(139,92,246,0.5)]",
  },
  {
    key: "scale",
    icon: TrendingUp,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10 dark:bg-amber-500/15",
    dotColor: "bg-amber-500",
    glowColor: "shadow-[0_0_12px_rgba(245,158,11,0.5)]",
  },
];

const TOTAL = steps.length;

const stepVisuals: ReactNode[] = [
  <TerminalMockup key="terminal" />,
  <InviteMockup key="invite" />,
  <MeetingMockup key="meeting" />,
  <ScaleMockup key="scale" />,
];

function StepCard({
  step,
  lang,
  iconSize,
}: {
  step: Step;
  lang: Locale;
  iconSize: string;
}) {
  return (
    <>
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-2xl",
          iconSize === "lg" ? "size-14" : "size-10 rounded-xl",
          step.bg,
        )}
      >
        <step.icon
          className={cn(iconSize === "lg" ? "size-7" : "size-5", step.color)}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
      <h3
        className={cn(
          "font-semibold tracking-tight",
          iconSize === "lg" ? "mt-5 text-xl lg:text-2xl" : "mt-3 text-[17px]",
        )}
      >
        {t(lang, `journey.${step.key}.title`)}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground sm:mt-3 lg:text-base">
        {t(lang, `journey.${step.key}.description`)}
      </p>
    </>
  );
}

function TimelineRail({
  activeStep,
  size = "default",
}: {
  activeStep: number;
  size?: "default" | "sm";
}) {
  const dotSize = size === "sm" ? "size-2.5" : "size-3";
  const dotActive = size === "sm" ? "size-3.5" : "size-4";
  const lineGap = size === "sm" ? "my-1" : "my-0.5";

  return (
    <div className="flex flex-col items-center pt-1">
      {steps.map((step, i) => (
        <div key={step.key} className="flex flex-col items-center">
          <div
            className={cn(
              "rounded-full transition-all duration-500",
              dotSize,
              step.dotColor,
              i === activeStep && dotActive,
              i === activeStep && "ring-2 ring-background",
              i === activeStep && step.glowColor,
              i < activeStep && "opacity-70",
              i > activeStep && "opacity-25 scale-75",
            )}
            style={
              i === activeStep
                ? { animation: "dot-pulse 2s ease-in-out infinite" }
                : undefined
            }
            aria-hidden="true"
          />
          {i < TOTAL - 1 && (
            <div className={cn("w-px flex-1 bg-border", lineGap)}>
              <div
                className="w-full bg-primary/60 transition-all duration-500"
                style={{ height: i < activeStep ? "100%" : "0%" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function useActiveStep() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = stepRefs.current.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActiveStep(idx);
          }
        }
      },
      { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" },
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { activeStep, stepRefs };
}

function JourneySteps({ lang }: { lang: Locale }) {
  const { activeStep, stepRefs } = useActiveStep();

  return (
    <>
      <div className="hidden md:block">
        <div className="flex gap-8 lg:gap-10">
          <div className="flex w-12 shrink-0 justify-center lg:w-14">
            <TimelineRail activeStep={activeStep} />
          </div>

          <div className="flex flex-1 flex-col gap-16 md:gap-20">
            {steps.map((step, i) => {
              const isReversed = i % 2 === 1;

              return (
                <div
                  key={step.key}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  data-animate="fade-up"
                  style={
                    {
                      "--animate-delay": i * 150,
                    } as React.CSSProperties
                  }
                  data-animate-delay
                  className="grid grid-cols-2 items-center gap-12 lg:gap-16"
                >
                  <div
                    className={cn(
                      "flex min-w-0 flex-col",
                      isReversed && "order-last items-end text-end",
                    )}
                  >
                    <StepCard step={step} lang={lang} iconSize="lg" />
                  </div>
                  <div className="flex min-w-0 justify-center">
                    {stepVisuals[i]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex gap-6 md:hidden">
        <div className="flex flex-col items-center pt-1">
          <TimelineRail activeStep={activeStep} size="sm" />
        </div>

        <div className="flex flex-col gap-12">
          {steps.map((step, i) => (
            <div
              key={step.key}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              data-animate="fade-up"
              style={
                {
                  "--animate-delay": i * 150,
                } as React.CSSProperties
              }
              data-animate-delay
              className="flex flex-col"
            >
              <StepCard step={step} lang={lang} iconSize="sm" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function JourneyStepper({ lang }: { lang: Locale }) {
  return (
    <section className="scroll-mt-20 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl lg:max-w-screen-2xl">
        <div data-animate="fade-up" className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t(lang, "journey.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            {t(lang, "journey.subtitle")}
          </p>
        </div>

        <JourneySteps lang={lang} />
      </div>
    </section>
  );
}
