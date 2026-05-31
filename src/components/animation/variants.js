/** Easing & variants matching Zefxa / Animate.css + WOW.js feel */

export const easeOut = [0.25, 0.46, 0.45, 0.94];

export const duration = {
  normal: 0.9,
  slow: 1.1,
  fast: 0.6,
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easeOut },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easeOut },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.normal, ease: easeOut },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.normal, ease: easeOut },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: easeOut },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: easeOut },
  },
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.normal, ease: easeOut },
  },
};

export const staggerContainer = (stagger = 0.12, delayChildren = 0.05) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const viewPort = { once: true, amount: 0.18, margin: '0px 0px -40px 0px' };
