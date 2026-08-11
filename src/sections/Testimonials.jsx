import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Sajid was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Sajid was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Sajid's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Sajid is a true full-stack wizard. He took our complex product requirements and transformed them into an intuitive and engaging user interface. We're receiving phenomenal feedback.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Sajid's work on our website has been nothing short of exceptional. He's a talented developer who communicates clearly and delivers on time. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 lg:py-24" id="testimonials">
      <div className="container">
        <SectionHeader eyebrow="Happy Clients" title="What Clients Say About Me" description="Don't take my word for it — see what my clients and collaborators have to say about working with me." />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration-90s] hover:[animation-play-state:paused] will-change-transform">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {
                  testimonials.map((testimonial) => (
                    <Card key={`${idx}-${testimonial.name}`} className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-2 hover:scale-[1.02] transition duration-300">
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-800 border border-white/10 inline-flex rounded-full items-center justify-center shrink-0 shadow-inner">
                          <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" loading="lazy" />
                        </div>
                        <div>

                          <h3 className="font-bold text-white text-base md:text-lg">{testimonial.name}</h3>
                          <p className="text-emerald-400/80 text-xs md:text-sm font-medium">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base text-white/70 leading-relaxed">{testimonial.text}</p>
                    </Card>
                  ))}
              </Fragment>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials