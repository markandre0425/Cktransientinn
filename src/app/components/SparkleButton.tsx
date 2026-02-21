import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "./ui/utils";
import type { ComponentProps, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

interface SparkleData {
  id: number;
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
  color: string;
  duration: number;
}

const COLORS = ["#ffffff", "#a5b4fc", "#fde68a", "#c4b5fd", "#93c5fd"];

function generateSparkles(): SparkleData[] {
  return Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * 360 + (Math.random() * 45 - 22.5);
    const rad = (angle * Math.PI) / 180;
    const distance = 18 + Math.random() * 22;
    return {
      id: Date.now() + i,
      x: 10 + Math.random() * 80,
      y: 15 + Math.random() * 70,
      size: 4 + Math.floor(Math.random() * 7),
      dx: Math.cos(rad) * distance,
      dy: Math.sin(rad) * distance,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      duration: 0.5 + Math.random() * 0.3,
    };
  });
}

function SparkleParticle({ x, y, size, dx, dy, color, duration }: SparkleData) {
  return (
    <motion.div
      className="pointer-events-none absolute z-10"
      style={{ left: `${x}%`, top: `${y}%`, translateX: "-50%", translateY: "-50%" }}
      initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
      animate={{ scale: [0, 1.1, 0], opacity: [0, 1, 0], x: dx, y: dy }}
      transition={{ duration, ease: "easeOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
        <path
          d="M6 0 L6.7 5.3 L12 6 L6.7 6.7 L6 12 L5.3 6.7 L0 6 L5.3 5.3 Z"
          fill={color}
          opacity="0.92"
        />
      </svg>
    </motion.div>
  );
}

interface SparkleButtonProps
  extends Omit<ComponentProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  wrapperClassName?: string;
  children?: ReactNode;
}

export function SparkleButton({
  children,
  className,
  variant,
  size,
  asChild = false,
  wrapperClassName,
  onMouseEnter,
  onMouseLeave,
  onClick,
  ...props
}: SparkleButtonProps) {
  const [sparkles, setSparkles] = useState<SparkleData[]>([]);
  const [active, setActive] = useState(false);

  const trigger = useCallback(() => {
    setSparkles(generateSparkles());
    setActive(true);
  }, []);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      trigger();
      (onMouseEnter as ((e: React.MouseEvent<HTMLButtonElement>) => void) | undefined)?.(e);
    },
    [trigger, onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setActive(false);
      (onMouseLeave as ((e: React.MouseEvent<HTMLButtonElement>) => void) | undefined)?.(e);
    },
    [onMouseLeave]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      trigger();
      (onClick as ((e: React.MouseEvent<HTMLButtonElement>) => void) | undefined)?.(e);
    },
    [trigger, onClick]
  );

  const sparkleLayer = (
    <AnimatePresence>
      {active &&
        sparkles.map((s) => <SparkleParticle key={s.id} {...s} />)}
    </AnimatePresence>
  );

  if (asChild) {
    return (
      <div
        className={cn("relative inline-flex", wrapperClassName)}
        onMouseEnter={trigger}
        onMouseLeave={() => setActive(false)}
        onClick={trigger}
      >
        {sparkleLayer}
        <Button asChild className={className} variant={variant} size={size} {...props}>
          {children}
        </Button>
      </div>
    );
  }

  return (
    <Button
      className={cn("relative overflow-visible", className)}
      variant={variant}
      size={size}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {children}
      {sparkleLayer}
    </Button>
  );
}
