

// Clamps any stat value strictly between 0 and 100
export const clampStat = (value) => Math.min(100, Math.max(0, value));

// Calculates total and average stats safely
export const calculateAvg = (stats) => {
  const total = stats.hunger + stats.love + stats.energy;
  return { total, average: total / 3 };
};


