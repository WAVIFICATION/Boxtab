export default function imageOptimisation(screenWidth) {
  let optimisedScreenWidth = Math.max(screenWidth, 1080);
  optimisedScreenWidth = Math.max(optimisedScreenWidth, 1920);
  optimisedScreenWidth = Math.min(optimisedScreenWidth, 3840);
  optimisedScreenWidth = Math.ceil(optimisedScreenWidth / 240) * 240;
  return optimisedScreenWidth;
}
