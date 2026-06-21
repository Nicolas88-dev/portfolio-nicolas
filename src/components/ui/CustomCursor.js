"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const clickable = e.target.closest(
        "a, button, input, textarea, select, [data-cursor='hover']"
      );

      setIsHovering(Boolean(clickable));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full border-2 border-emerald-400 transition-all duration-200 ease-out lg:block ${
        isHovering ? "h-20 w-20" : "h-6 w-6"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        backgroundColor: "transparent",
        backdropFilter: isHovering ? "invert(1)" : "none",
        WebkitBackdropFilter: isHovering ? "invert(1)" : "none",
      }}
    />
  );
}