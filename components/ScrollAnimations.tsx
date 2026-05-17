"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(
              (entry.target as HTMLElement).dataset.delay || "0",
              10
            );
            setTimeout(() => entry.target.classList.add("animate-in"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
