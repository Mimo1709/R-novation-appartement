import {useState, useEffect} from 'react';
import {useInView} from 'react-intersection-observer';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}
export default function Counter({ end, suffix = '', label }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 2500;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, end]);
  return (
    <div ref={ref}>
      <div className="text-5xl font-bold text-primary">
        {count}{suffix}
      </div>
      <div className="text-lg mt-2">{label}</div>
    </div>
  );
}
