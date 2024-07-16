import { cn } from "@/utils/cn";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Yuvraj Bansal",
    username: "@ Founder at Yuka",
    body: "Collaborating with Terresorca has been an absolute joy. Their unwavering support, creativity, and dedication to our brand have elevated Yuka to new heights. Together, we've crafted exceptional products, provided top-notch service, and made sustainability a priority. Terresorca's customer-centric approach has driven sales and customer loyalty. Our shared vision of excellence is driving our success, and I'm excited for what the future holds.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Sanjay Singh",
    username: "@ Founder at TechOrca",
    body: "Partnering with Terresorca was a game-changer for our business. Their innovative strategies and unwavering support propelled us to new heights. Since joining forces, our sales have seen a remarkable surge, exceeding all expectations..",
    img: "https://avatar.vercel.sh/jill",
  },
  
];

const firstRow = reviews.slice(0, reviews.length );
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-[22rem] w-[18em] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const Testimonial = () => {
  return (
    <>
            <h2 className="text-3xl md:hidden flex flex-wrap mx-[3.5rem] text-white font-bold text-center mt-[6rem] mb-8">Hear our Harmony: <span className="text-red-600">Voices of success</span></h2>
    
    <div className="relative  md:hidden flex h-96 mt-[3rem] mb-[4rem]  flex-row items-center justify-center  rounded-lg  text-gray-200 bg-black sm:px-20 md:shadow-xl">
      <Marquee pauseOnHover  className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover  className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black dark:from-black"></div> */}
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black dark:from-black"></div> */}
    </div>
    </>
  );
};


