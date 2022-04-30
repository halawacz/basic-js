const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (!sampleActivity || Number.isNaN(parseFloat(sampleActivity))) {
    return false;
  }

  let pastActivity = parseFloat(sampleActivity);
  return Math.ceil(
    HALF_LIFE_PERIOD *
      (Math.log(pastActivity / MODERN_ACTIVITY) / Math.log(0.5))
  );
}

console.log(dateSample(3));
