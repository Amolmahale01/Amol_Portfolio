export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const cardHover = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.05,
    rotateX: 5,
    rotateY: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const buttonHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 20px -4px rgba(59, 130, 246, 0.1)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export const floatingShapes = {
  floating1: {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      rotate: [0, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  },
  floating2: {
    animate: {
      y: [-20, 20, -20],
      x: [5, -5, 5],
      rotate: [0, -360],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  },
  floating3: {
    animate: {
      y: [-12, 12, -12],
      x: [-8, 8, -8],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  },
};

export const backgroundText = {
  animate: {
    opacity: [0.1, 0.2, 0.1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export const textReveal = {
  hidden: {
    opacity: 0,
    y: 100,
    skewY: 7,
  },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const skillBar = {
  hidden: {
    width: "0%",
  },
  visible: {
    width: "100%",
    transition: {
      duration: 1.5,
      ease: "easeOut" as const,
    },
  },
};

export const magneticHover = {
  rest: {
    x: 0,
    y: 0,
  },
  hover: {
    x: 0,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};