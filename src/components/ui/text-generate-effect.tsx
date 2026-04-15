import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "~/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  delayIncrement?: number;
  filter?: boolean;
}

export function TextGenerateEffect({
  words,
  className,
  as: Tag = "div",
  duration = 0.4,
  delayIncrement = 0.06,
  filter = true,
}: TextGenerateEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const wordArray = words.split(" ");

  return (
    <Tag ref={ref} className={cn("inline", className)}>
      {wordArray.map((word, i) => (
        <motion.span
          key={`${word}-${i}-${wordArray.length}`}
          className="inline-block"
          initial={{
            opacity: 0,
            filter: filter ? "blur(8px)" : "none",
          }}
          animate={
            isInView
              ? { opacity: 1, filter: filter ? "blur(0px)" : "none" }
              : {}
          }
          transition={{
            duration,
            delay: i * delayIncrement,
            ease: "easeOut",
          }}
        >
          {word}
          {i < wordArray.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </motion.span>
      ))}
    </Tag>
  );
}
