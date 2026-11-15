import { useEffect, useRef } from "react";

/**
 * Tilts an element in 3D towards the pointer.
 * The element needs the "ft-tilt" class, which reads the --rx / --ry values set here.
 * Tracks the pointer over the nearest [data-tilt-area] ancestor, or the element itself.
 * Does nothing on touch screens or when the visitor prefers reduced motion.
 */
export function useTilt<T extends HTMLElement>(maxDegrees = 8) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window.matchMedia !== "function") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const area: HTMLElement = el.closest<HTMLElement>("[data-tilt-area]") ?? el;
    const clamp = (n: number) => Math.max(-1, Math.min(1, n));
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2));
      const y = clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--ry", `${(x * maxDegrees).toFixed(2)}deg`);
        el.style.setProperty("--rx", `${(-y * maxDegrees).toFixed(2)}deg`);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--rx", "0deg");
    };

    area.addEventListener("pointermove", onMove);
    area.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      area.removeEventListener("pointermove", onMove);
      area.removeEventListener("pointerleave", onLeave);
    };
  }, [maxDegrees]);

  return ref;
}