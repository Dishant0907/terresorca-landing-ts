import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollingText() {
  return (
    <VelocityScroll
      text="Terresorca"
      default_velocity={5}
      className="font-display md:mt-[6rem] mt-[4rem]  text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
