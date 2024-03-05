import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
  } from "@/components/ui/text-reveal-card";



export const RevealCard = () => {
    return( 
         <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] dark:bg-dot-white/[0.05] rounded-2xl w-full">
    <TextRevealCard
      text="You have Products!"
      revealText="I know to sell "
    >
      <TextRevealCardTitle>
        Sometimes, you just need to realize it.
      </TextRevealCardTitle>
      {/* <TextRevealCardDescription>
        
      </TextRevealCardDescription> */}
    </TextRevealCard>
  </div>)

}