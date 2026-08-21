// Clamps any stat value strictly between 0 and 100
export const clampStat = (value) => Math.min(100, Math.max(0, value));

// Calculates total and average stats safely
export const calculateAvg = (stats) => {
  const total = stats.hunger + stats.love + stats.energy;
  return { total, average: total / 3 };
};

// Determines which sprite to display based on action or average health
export const getActiveSprite = (currentAction, average, sprites) => {
  const { love, feed, sleep, sprite1, sprite2, sprite3, sprite4, dead } = sprites;

  if (currentAction === 'love') return love;
  if (currentAction === 'hunger') return feed;
  if (currentAction === 'energy') return sleep;

  if (average >= 90) return sprite1;
  if (average >= 60) return sprite2;
  if (average >= 40) return sprite3;
  if (average === 0) return dead;
  return sprite4;
};