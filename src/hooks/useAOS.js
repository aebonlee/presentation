import { useEffect } from 'react';

const useAOS = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  });
};

export default useAOS;
