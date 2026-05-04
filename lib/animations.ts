import type { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0, 0, 1] as const },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: [0.25, 0, 0, 1] as const } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 24px rgba(0,0,0,0.07)' },
  hover: {
    y: -8,
    boxShadow: '0 12px 40px rgba(30,58,138,0.15)',
    transition: { duration: 0.3, ease: [0.25, 0, 0, 1] as const },
  },
}

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.25 } },
}

export const counterVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'backOut' as const },
  }),
}

export const slideInFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.4, ease: [0.25, 0, 0, 1] as const },
  },
}

export const drawerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0, 0, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.25, ease: [0.55, 0, 1, 0.45] as const },
  },
}
