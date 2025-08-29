// Seasonal color utility - automatically changes accent color based on current season

export function getCurrentSeason(): 'spring' | 'summer' | 'fall' | 'winter' {
  const now = new Date();
  const month = now.getMonth() + 1; // getMonth() is 0-indexed
  
  // Northern hemisphere seasons
  if (month >= 3 && month <= 5) return 'spring';  // March - May
  if (month >= 6 && month <= 8) return 'summer';  // June - August
  if (month >= 9 && month <= 11) return 'fall';   // September - November
  return 'winter';  // December - February
}

export function getSeasonalColor(): string {
  const season = getCurrentSeason();
  const colors = {
    spring: '#FFB5BA',  // Soft sakura pink
    summer: '#7FB069',  // Fresh sage green
    fall: '#C26B5C',    // Warm terracotta
    winter: '#6B8CAE'   // Muted dusty blue
  };
  
  return colors[season];
}

export function getSeasonName(): string {
  return getCurrentSeason();
}