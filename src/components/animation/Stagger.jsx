import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewPort } from './variants';

export function Stagger({ children, className = '', stagger = 0.12, delayChildren = 0.05 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewPort.amount, margin: viewPort.margin }}
      variants={staggerContainer(stagger, delayChildren)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', variant = fadeInUp }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={variant}>
      {children}
    </motion.div>
  );
}
