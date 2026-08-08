import { useEffect, useRef, useState } from 'react';

/**
 * useInView — triggers when element enters the viewport.
 * @param {number} threshold  - 0 to 1, how much of element must be visible
 * @param {string} rootMargin - margin around the root (e.g. "0px 0px -60px 0px")
 * @param {boolean} once      - if true, only animates once (recommended for most cases)
 */
export default function useInView(threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
