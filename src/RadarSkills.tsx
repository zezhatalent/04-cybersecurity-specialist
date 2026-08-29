import { motion } from 'framer-motion';
import Reveal from './lib/Reveal';
import { useInView } from './hooks/useMotion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { SectionHeading } from './components/Sections';

function RadarChart() {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>();
  const names = content.skills ?? [];
  const cx = 160;
  const cy = 160;
  const R = 110;
  const levels = 4;

  const point = (i: number, r: number) => {
    const angle = (Math.PI * 2 * i) / names.length - Math.PI / 2;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  };

  const polygon = (ratio: number) =>
    names
      .map((_, i) => point(i, R * ratio).join(','))
      .join(' ');

  return (
    <div ref={ref} className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
      <svg viewBox="0 0 320 320" className="w-full max-w-sm">
        {Array.from({ length: levels }).map((_, l) => (
          <polygon
            key={l}
            points={polygon((l + 1) / levels)}
            fill="none"
            stroke={theme.border}
            strokeWidth="1"
          />
        ))}
        {names.map((_, i) => {
          const [x, y] = point(i, R);
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={theme.border} strokeWidth="1" />;
        })}
        <motion.polygon
          points={polygon(0)}
          fill={`${theme.accent}22`}
          stroke={theme.accent}
          strokeWidth="2"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{
            hidden: { points: polygon(0.02) },
            show: {
              points: polygon(1),
              transition: { duration: 1.4, ease: 'easeOut' },
            },
          }}
        />
      </svg>
      <div className="grid gap-3">
        {names.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.08}>
            <div className="flex items-center justify-between gap-8">
              <span className="font-medium" style={{ color: theme.text }}>{s.name}</span>
              <span className="font-mono text-sm" style={{ color: theme.accent }}>{s.level}%</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function RadarSkills() {
  const { theme } = useTheme();
  return (
    <section id="skills" className="py-24" style={{ background: theme.surface }}>
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Skills" title="Security disciplines" />
        <div className="mt-10">
          <RadarChart />
        </div>
      </div>
    </section>
  );
}
