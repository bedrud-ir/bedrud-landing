"use client";

import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretDownFilled,
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconCommand,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconSearch,
  IconTable,
  IconVolume,
  IconVolume2,
  IconWorld,
} from "@tabler/icons-react";
import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

export function MacbookScroll({
  children,
  showGradient,
}: {
  children: ReactNode;
  showGradient?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5],
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5],
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[200vh] shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 perspective-midrange sm:scale-50 md:scale-100 md:pb-80 md:pt-10"
    >
      {/* Lid */}
      <Lid
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      >
        {children}
      </Lid>

      {/* Base body */}
      <div className="relative -z-10 h-88 w-lg overflow-hidden rounded-2xl bg-gray-200 dark:bg-black">
        {/* Above keyboard bar */}
        <div className="relative h-10 w-full">
          <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-black" />
        </div>

        {/* Keyboard & speakers */}
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>

        {/* Trackpad */}
        <Trackpad />

        {/* Bottom notch */}
        <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-linear-to-t from-black/60 to-black" />

        {/* Gradient overlay */}
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-linear-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Lid                                                                */
/* ------------------------------------------------------------------ */

function Lid({
  scaleX,
  scaleY,
  rotate,
  translate,
  children,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  children: ReactNode;
}) {
  return (
    <div className="relative [perspective:800px]">
      {/* Back of lid */}
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900, #171717) inset",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-white">
            <AcesLogo />
          </span>
        </div>
      </div>

      {/* Screen — hinges from top, original Aceternity transforms */}
      <motion.div
        style={{
          scaleX,
          scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div className="absolute inset-0 rounded-lg bg-[#272729]" />
        <div className="relative z-10 size-full overflow-hidden rounded-lg bg-white dark:bg-black">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Keyboard                                                           */
/* ------------------------------------------------------------------ */

function Keypad() {
  return (
    <div className="mx-1 h-full rounded-tl-[4px] rounded-tr-[4px] bg-[#050505] p-1">
      {/* Row 1 – function keys */}
      <Row>
        <KBtn className="w-10 items-end justify-start pb-[2px] pl-[4px]">
          <span className="block">esc</span>
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="size-[6px]" />
          <span className="mt-1 inline-block">F1</span>
        </KBtn>
        <KBtn>
          <IconBrightnessUp className="size-[6px]" />
          <span className="mt-1 inline-block">F2</span>
        </KBtn>
        <KBtn>
          <IconTable className="size-[6px]" />
          <span className="mt-1 inline-block">F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className="size-[6px]" />
          <span className="mt-1 inline-block">F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className="size-[6px]" />
          <span className="mt-1 inline-block">F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className="size-[6px]" />
          <span className="mt-1 inline-block">F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="size-[6px]" />
          <span className="mt-1 inline-block">F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="size-[6px]" />
          <span className="mt-1 inline-block">F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="size-[6px]" />
          <span className="mt-1 inline-block">F9</span>
        </KBtn>
        <KBtn>
          <IconVolume className="size-[6px]" />
          <span className="mt-1 inline-block">F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className="size-[6px]" />
          <span className="mt-1 inline-block">F11</span>
        </KBtn>
        <KBtn>
          <IconBrightnessUp className="size-[6px]" />
          <span className="mt-1 inline-block">F12</span>
        </KBtn>
        <KBtn>
          <div className="mt-[2px] size-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
            <div className="size-full rounded-full bg-black" />
          </div>
        </KBtn>
      </Row>

      {/* Row 2 – numbers */}
      <Row>
        <KBtn>
          <span className="block">~</span>
          <span className="block mt-1">`</span>
        </KBtn>
        <KBtn>
          <span className="block">!</span>
          <span className="block mt-1">1</span>
        </KBtn>
        <KBtn>
          <span className="block">@</span>
          <span className="block mt-1">2</span>
        </KBtn>
        <KBtn>
          <span className="block">#</span>
          <span className="block mt-1">3</span>
        </KBtn>
        <KBtn>
          <span className="block">$</span>
          <span className="block mt-1">4</span>
        </KBtn>
        <KBtn>
          <span className="block">%</span>
          <span className="block mt-1">5</span>
        </KBtn>
        <KBtn>
          <span className="block">^</span>
          <span className="block mt-1">6</span>
        </KBtn>
        <KBtn>
          <span className="block">&amp;</span>
          <span className="block mt-1">7</span>
        </KBtn>
        <KBtn>
          <span className="block">*</span>
          <span className="block mt-1">8</span>
        </KBtn>
        <KBtn>
          <span className="block">(</span>
          <span className="block mt-1">9</span>
        </KBtn>
        <KBtn>
          <span className="block">)</span>
          <span className="block mt-1">0</span>
        </KBtn>
        <KBtn>
          <span className="block">&mdash;</span>
          <span className="block mt-1">-</span>
        </KBtn>
        <KBtn>
          <span className="block">+</span>
          <span className="block mt-1">=</span>
        </KBtn>
        <KBtn className="w-10 items-end justify-end pb-[2px] pr-[4px]">
          <span className="block">delete</span>
        </KBtn>
      </Row>

      {/* Row 3 – QWERTY */}
      <Row>
        <KBtn className="w-10 items-end justify-start pb-[2px] pl-[4px]">
          <span className="block">tab</span>
        </KBtn>
        <KBtn>
          <span className="block">Q</span>
        </KBtn>
        <KBtn>
          <span className="block">W</span>
        </KBtn>
        <KBtn>
          <span className="block">E</span>
        </KBtn>
        <KBtn>
          <span className="block">R</span>
        </KBtn>
        <KBtn>
          <span className="block">T</span>
        </KBtn>
        <KBtn>
          <span className="block">Y</span>
        </KBtn>
        <KBtn>
          <span className="block">U</span>
        </KBtn>
        <KBtn>
          <span className="block">I</span>
        </KBtn>
        <KBtn>
          <span className="block">O</span>
        </KBtn>
        <KBtn>
          <span className="block">P</span>
        </KBtn>
        <KBtn>
          <span className="block">{"{"}</span>
          <span className="block mt-1">[</span>
        </KBtn>
        <KBtn>
          <span className="block">{"}"}</span>
          <span className="block mt-1">]</span>
        </KBtn>
        <KBtn>
          <span className="block">|</span>
          <span className="block mt-1">\</span>
        </KBtn>
      </Row>

      {/* Row 4 – ASDF */}
      <Row>
        <KBtn className="w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]">
          <span className="block">caps lock</span>
        </KBtn>
        <KBtn>
          <span className="block">A</span>
        </KBtn>
        <KBtn>
          <span className="block">S</span>
        </KBtn>
        <KBtn>
          <span className="block">D</span>
        </KBtn>
        <KBtn>
          <span className="block">F</span>
        </KBtn>
        <KBtn>
          <span className="block">G</span>
        </KBtn>
        <KBtn>
          <span className="block">H</span>
        </KBtn>
        <KBtn>
          <span className="block">J</span>
        </KBtn>
        <KBtn>
          <span className="block">K</span>
        </KBtn>
        <KBtn>
          <span className="block">L</span>
        </KBtn>
        <KBtn>
          <span className="block">:</span>
          <span className="block mt-1">;</span>
        </KBtn>
        <KBtn>
          <span className="block">&quot;</span>
          <span className="block mt-1">&apos;</span>
        </KBtn>
        <KBtn className="w-[2.85rem] items-end justify-end pb-[2px] pr-[4px]">
          <span className="block">return</span>
        </KBtn>
      </Row>

      {/* Row 5 – ZXCV */}
      <Row>
        <KBtn className="w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]">
          <span className="block">shift</span>
        </KBtn>
        <KBtn>
          <span className="block">Z</span>
        </KBtn>
        <KBtn>
          <span className="block">X</span>
        </KBtn>
        <KBtn>
          <span className="block">C</span>
        </KBtn>
        <KBtn>
          <span className="block">V</span>
        </KBtn>
        <KBtn>
          <span className="block">B</span>
        </KBtn>
        <KBtn>
          <span className="block">N</span>
        </KBtn>
        <KBtn>
          <span className="block">M</span>
        </KBtn>
        <KBtn>
          <span className="block">&lt;</span>
          <span className="block mt-1">,</span>
        </KBtn>
        <KBtn>
          <span className="block">&gt;</span>
          <span className="block mt-1">.</span>
        </KBtn>
        <KBtn>
          <span className="block">?</span>
          <span className="block mt-1">/</span>
        </KBtn>
        <KBtn className="w-[3.65rem] items-end justify-end pb-[2px] pr-[4px]">
          <span className="block">shift</span>
        </KBtn>
      </Row>

      {/* Row 6 – bottom row */}
      <Row>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <span className="block">fn</span>
          <IconWorld className="size-[6px]" />
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <IconChevronUp className="size-[6px]" />
          <span className="block">control</span>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <OptionKey className="size-[6px]" />
          <span className="block">option</span>
        </KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <IconCommand className="size-[6px]" />
          <span className="block">command</span>
        </KBtn>
        <KBtn className="w-[8.2rem]" />
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <IconCommand className="size-[6px]" />
          <span className="block">command</span>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <OptionKey className="size-[6px]" />
          <span className="block">option</span>
        </KBtn>
        <div className="mt-[2px] flex h-6 flex-col items-center justify-end rounded-[4px] p-[0.5px]">
          <KBtn className="h-3">
            <IconCaretUpFilled className="size-[6px]" />
          </KBtn>
          <div className="flex">
            <KBtn className="h-3">
              <IconCaretLeftFilled className="size-[6px]" />
            </KBtn>
            <KBtn className="h-3">
              <IconCaretDownFilled className="size-[6px]" />
            </KBtn>
            <KBtn className="h-3">
              <IconCaretRightFilled className="size-[6px]" />
            </KBtn>
          </div>
        </div>
      </Row>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Keyboard helpers                                                   */
/* ------------------------------------------------------------------ */

function Row({ children }: { children: ReactNode }) {
  return (
    <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{children}</div>
  );
}

function KBtn({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[4px] p-[0.5px]",
        "shadow-[0_0_0_0.5px_rgba(0,0,0,0.8),0_1px_0.5px_0_rgba(255,255,255,0.08)_inset,0_-0.5px_0.5px_0_rgba(0,0,0,0.2)_inset]",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]",
          "shadow-[0_-0.5px_0.5px_0_rgba(255,255,255,0.04)_inset,0_0.5px_0.5px_0_rgba(0,0,0,0.25)_inset]",
          childrenClassName,
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center justify-center text-[5px] text-neutral-200",
            backlit && "text-white",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Trackpad() {
  return (
    <div
      className="mx-auto my-1 h-32 w-[40%] rounded-xl"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    />
  );
}

function SpeakerGrid() {
  return (
    <div
      className="mt-2 h-40 px-[0.5px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  SVG icons                                                          */
/* ------------------------------------------------------------------ */

function AcesLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Logo</title>
      <path
        d="M16 2L2 10v12l14 8 14-8V10L16 2z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

export const OptionKey = ({ className }: { className: string }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={2}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
      />
      <rect
        id="_Transparent_Rectangle_"
        className="st0"
        width="32"
        height="32"
        stroke="none"
      />
    </svg>
  );
};
