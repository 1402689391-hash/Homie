import { useEffect, useRef, useState } from 'react';

const animPresets = {
  'fade-up':    { opacity: 0, transform: 'translateY(30px)' },
  'fade-down':  { opacity: 0, transform: 'translateY(-30px)' },
  'fade-left':  { opacity: 0, transform: 'translateX(30px)' },
  'fade-right': { opacity: 0, transform: 'translateX(-30px)' },
  'scale-in':   { opacity: 0, transform: 'scale(0.88)' },
  'blur-in':    { opacity: 0, filter: 'blur(6px)' },
};

export default function Reveal({ children, animation = 'fade-up', delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        ...(!visible ? animPresets[animation] : { opacity: 1, transform: 'none', filter: 'none' }),
        ...(className.includes('inline') ? { display: 'inline-block' } : {}),
      }}
    >
      {children}
    </div>
  );
}
