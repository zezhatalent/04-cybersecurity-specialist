import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const chars = '010101011010101001101110100110101010101010101010';
    const fontSize = 14;
    let cols = 0;
    let drops: number[] = [];
    let raf = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    };
    const draw = () => {
      ctx.fillStyle = 'rgba(4,7,10,0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = i % 37 === 0 ? '#e0e0e0' : '#22d3ee';
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 opacity-40" />;
}

function ShieldSVG() {
  const { theme } = useTheme();
  return (
    <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative mx-auto flex h-48 w-48 items-center justify-center md:h-64 md:w-64">
      <div className="absolute inset-0 rounded-full" style={{ boxShadow: `0 0 60px ${theme.accent}44` }} />
      <motion.div className="absolute inset-0 rounded-full border-2" style={{ borderColor: `${theme.accent}55` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
        <span className="absolute left-1/2 top-0 h-1/2 w-0.5"
          style={{ background: `linear-gradient(180deg, ${theme.accent}, transparent)`, transformOrigin: 'bottom' }} />
      </motion.div>
      <svg viewBox="0 0 24 24" className="relative h-24 w-24 md:h-32 md:w-32" fill="none">
        <motion.path d="M12 2L3 5.5v5.5c0 5 4 9.5 9 11 5-1.5 9-6 9-11V5.5L12 2z"
          stroke={theme.accent} strokeWidth="1.4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }} />
        <motion.path d="M8.5 12l2.3 2.3 4.7-4.7"
          stroke={theme.accent2} strokeWidth="1.6" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }} />
      </svg>
    </motion.div>
  );
}

function FloatingShield({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  const { theme } = useTheme();
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: x, top: y }}
      animate={{ y: [0, -15, 0], opacity: [0.08, 0.25, 0.08] }}
      transition={{ duration: 7 + delay, repeat: Infinity, ease: 'easeInOut', delay }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 5.5v5.5c0 5 4 9.5 9 11 5-1.5 9-6 9-11V5.5L12 2z"
          stroke={theme.accent} strokeWidth="0.5" opacity="0.3" />
      </svg>
    </motion.div>
  );
}

const glitchKeyframes = {
  left: ['0px', '-2px', '1px', '0px'],
  right: ['0px', '2px', '-1px', '0px'],
};

export default function Hero() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgX = useTransform(mouseX, [0, 1], [-8, 8]);
  const bgY = useTransform(mouseY, [0, 1], [-8, 8]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener('mousemove', handler);
    return () => el.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} id="hero" className="relative flex min-h-screen items-center overflow-hidden" style={{ background: theme.bg }}>
      <MatrixRain />
      <motion.div className="pointer-events-none absolute inset-0" style={{ x: bgX, y: bgY, background: `radial-gradient(ellipse at 30% 40%, transparent 20%, ${theme.bg}d9)` }} />

      <FloatingShield delay={0} x="8%" y="18%" size={40} />
      <FloatingShield delay={2} x="85%" y="30%" size={30} />
      <FloatingShield delay={1} x="75%" y="80%" size={35} />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="font-mono text-sm" style={{ color: theme.accent }}>
            $ whoami -- security specialist
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative text-5xl font-extrabold md:text-6xl" style={{ color: theme.text }}>
            <span className="relative inline-block">
              {content.name}
              <motion.span className="absolute inset-0" style={{ color: theme.accent, opacity: 0.6 }}
                animate={glitchKeyframes.left}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}>
                {content.name}
              </motion.span>
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-3 font-mono text-xl font-semibold" style={{ color: theme.accent }}>
            {content.tagline}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="mt-9 flex flex-wrap gap-4">
            <motion.a href="#projects" className="rounded border px-6 py-3 font-semibold" style={{ background: theme.accent, color: theme.bg }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${theme.accent}66` }} whileTap={{ scale: 0.95 }}>
              View security work
            </motion.a>
            <motion.a href="#contact" className="rounded border px-6 py-3 font-semibold" style={{ borderColor: theme.accent, color: theme.accent }}
              whileHover={{ scale: 1.05, backgroundColor: `${theme.accent}15` }} whileTap={{ scale: 0.95 }}>
              Report securely
            </motion.a>
          </motion.div>
        </div>

        <ShieldSVG />
      </div>
    </section>
  );
}
