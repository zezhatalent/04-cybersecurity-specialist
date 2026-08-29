import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ$#@%&*';
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
  const { theme } = useTheme();
      ctx.fillStyle = 'rgba(4,7,10,0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = i % 37 === 0 ? theme.text : theme.accent;
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
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 opacity-40"
    />
  );
}

function Shield() {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative mx-auto flex h-48 w-48 items-center justify-center md:h-64 md:w-64"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: `0 0 60px ${theme.accent}44` }}
      />
      {/* rotating scan ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2"
        style={{ borderColor: `${theme.accent}55` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <span
          className="absolute left-1/2 top-0 h-1/2 w-0.5"
          style={{
            background: `linear-gradient(180deg, ${theme.accent}, transparent)`,
            transformOrigin: 'bottom',
          }}
        />
      </motion.div>
      <svg viewBox="0 0 24 24" className="relative h-24 w-24 md:h-32 md:w-32" fill="none">
        <motion.path
          d="M12 2L3 5.5v5.5c0 5 4 9.5 9 11 5-1.5 9-6 9-11V5.5L12 2z"
          stroke={theme.accent}
          strokeWidth="1.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
        />
        <motion.path
          d="M8.5 12l2.3 2.3 4.7-4.7"
          stroke={theme.accent2}
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
        />
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
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: theme.bg }}
    >
      <MatrixRain />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse at 30% 40%, transparent 20%, ${theme.bg}d9)` }}
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-sm"
            style={{ color: theme.accent }}
          >
            $ whoami — security specialist
          </motion.p>
          {/* glitch name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            <span className="relative inline-block">
              {content.name}
              <motion.span
                className="absolute inset-0"
                style={{ color: theme.accent, opacity: 0.6 }}
                animate={glitchKeyframes.left}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
              >
                {content.name}
              </motion.span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-3 font-mono text-xl font-semibold"
            style={{ color: theme.accent }}
          >
            {content.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded border px-6 py-3 font-semibold"
              style={{ background: theme.accent, color: theme.bg }}
            >
              View security work
            </a>
            <a
              href="#contact"
              className="rounded border px-6 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              Report securely
            </a>
          </motion.div>
        </div>

        <Shield />
      </div>
    </section>
  );
}
