"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = setTimeout(() => el.setAttribute("data-revealed", "true"), delay);
            io.disconnect();
            return () => clearTimeout(t);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  // @ts-expect-error - dynamic tag ref
  return <Tag ref={ref} data-reveal="" className={className}>{children}</Tag>;
}
