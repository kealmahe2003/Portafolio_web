"use client";

import type { MouseEvent } from "react";

export function ThemeToggle({ label }: { label: string }) {
  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };

    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }

    // Reveal the new theme in a circle that grows from the button to the farthest corner.
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    root.classList.add("theme-transition");
    const transition = document.startViewTransition(apply);
    transition.ready.then(() =>
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 550, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" },
      ),
    );
    transition.finished.finally(() => root.classList.remove("theme-transition"));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="group grid size-9 place-items-center rounded-md border border-border text-muted transition-colors hover:text-foreground"
    >
      {/* Sun in dark mode, moon in light mode; swapped by CSS so there is no hydration flash. */}
      <svg viewBox="0 0 24 24" className="hidden size-4 transition-transform duration-500 group-hover:rotate-45 dark:block" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg viewBox="0 0 24 24" className="size-4 transition-transform duration-500 group-hover:-rotate-12 dark:hidden" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
