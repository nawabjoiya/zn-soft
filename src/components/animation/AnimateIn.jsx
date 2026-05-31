import { motion, useReducedMotion } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  slideInLeft,
  slideInRight,
  zoomIn,
  viewPort,
} from './variants';

const variants = {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  slideInLeft,
  slideInRight,
  zoomIn,
};

export default function AnimateIn({
  children,
  className = '',
  as = 'div',
  variant = 'fadeInUp',
  delay = 0,
  duration: customDuration,
  once = true,
  amount = viewPort.amount,
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;
  const selected = variants[variant] || fadeInUp;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const visible = {
    ...selected.visible,
    transition: {
      ...selected.visible.transition,
      delay,
      ...(customDuration ? { duration: customDuration } : {}),
    },
  };

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: viewPort.margin }}
      variants={{ hidden: selected.hidden, visible }}
    >
      {children}
    </Component>
  );
}
