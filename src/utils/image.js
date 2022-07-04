export function imageOptimisation(screenWidth) {
  screenWidth = screenWidth;
  screenWidth = Math.max(screenWidth, 1920);
  screenWidth = Math.min(screenWidth, 3840);
  screenWidth = Math.ceil(screenWidth / 240) * 240;
  return screenWidth;
}
