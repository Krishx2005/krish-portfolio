import { useEffect, useRef, useState } from "react";

export default function CursorSpotlight() {
  const ref = useRef(null);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  useEffect(() => {
    if (!hasHover) return;
    function onMove(e) {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      }
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [hasHover]);

  if (!hasHover) return null;

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 pointer-events-none z-[60] w-[600px] h-[600px] rounded-full opacity-[0.04] dark:opacity-[0.07]"
      style={{
        background: "radial-gradient(circle, var(--spotlight-color) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
