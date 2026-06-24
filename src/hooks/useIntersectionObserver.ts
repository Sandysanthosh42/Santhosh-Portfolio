import { useEffect } from 'react';
export const useIntersectionObserver = (selector = '.reveal-on-scroll', threshold = 0.1) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [selector, threshold]);
};