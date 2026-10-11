import type { PointerEvent, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

/** Glass card whose hover glow follows the cursor. */
export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onPointerMove={handleMove}
      className={`spotlight glass group rounded-3xl transition-transform duration-500 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
