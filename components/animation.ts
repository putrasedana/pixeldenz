export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeDelayed = {
  hidden: { opacity: 0, y: 25 },
  show: (i: number) => ({
    opacity: 1,
    y: 10,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};
