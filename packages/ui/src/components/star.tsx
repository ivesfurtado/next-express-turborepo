"use client";

import { cn } from "@monorepo/utils/styles";

interface StarProps {
  className?: string;
  filled?: boolean;
}

export const Star = ({ className, filled = true }: StarProps) => {
  return (
    <svg
      className={cn("w-4 h-4", className)}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
};
