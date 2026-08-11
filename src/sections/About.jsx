'use client'
import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from 'next/image'
import JavaScriptIcon from "@/assets/icons/square-js.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import NextIcon from "@/assets/icons/next.svg"
import CodeIcon from "@/assets/icons/code.svg"
import TailwindIcon from "@/assets/icons/tailwind.svg"
import MongoIcon from "@/assets/icons/mongodb.svg"
import PostmanIcon from "@/assets/icons/postman.svg"
import MapImage from "@/assets/images/map.png"
import SmileImage from "@/assets/images/memoji-smile.png"
import CardHeader from '@/components/CardHeader'
import ToolBoxItems from '@/components/ToolBoxItems'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const toolboxItems = [
    { title: "JavaScript", icon: JavaScriptIcon },
    { title: "Next.js", icon: NextIcon },
    { title: "React", icon: ReactIcon },
    { title: "Tailwind CSS", icon: TailwindIcon },
    { title: "MongoDB", icon: MongoIcon },
    { title: "Postman", icon: PostmanIcon },
    { title: "VSCode", icon: CodeIcon },
    { title: "GitHub", icon: GithubIcon },
    { title: "Chrome", icon: ChromeIcon }
]

const hobbies = [
    { title: "Coding", emoji: "🧑‍💻", top: "8%", left: "8%" },
    { title: "Gaming", emoji: "🎮", top: "8%", left: "52%" },
    { title: "Photography", emoji: "📸", top: "38%", left: "12%" },
    { title: "Hiking", emoji: "🧗", top: "68%", left: "62%" },
    { title: "Music", emoji: "🎼", top: "38%", left: "68%" },
    { title: "Reading", emoji: "📚", top: "68%", left: "8%" },
    { title: "Badminton", emoji: "🏸", top: "38%", left: "42%" }
]

const About = () => {
    const constraintRef = useRef(null);
    return (
        <div id='about' className='py-20 lg:py-28 relative'>
            <div className='container'>
                <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what drives my work, and what inspires me outside of code." />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-card-premium p-6 md:p-8 rounded-3xl mt-10 max-w-4xl mx-auto border border-emerald-500/20"
                >
                    <p className="text-white/80 text-base md:text-lg leading-relaxed text-center font-normal">
                        I have hands-on experience deploying full-stack production systems on both <b className="text-emerald-300 font-semibold">Vercel</b> and <b className="text-cyan-300 font-semibold">Ubuntu VPS</b>—managing domain configs, SSL encryption, and server security. My background includes whitelisting/firewall hardening (learned while hosting Minecraft servers on Linux), scoring a <b className="text-emerald-400 font-bold">100% Lighthouse SEO score</b>, and systematically engineering around complex web engineering hurdles like CORS, JWT auth, and state synchronization.
                    </p>
                </motion.div>

                <div className='mt-16 flex flex-col gap-8'>
                    <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8'>
                        {/* Reads Card */}
                        <Card className="h-[340px] md:col-span-2 lg:col-span-1 flex flex-col justify-between">
                            <CardHeader title="My Reads" description="Books shaping my perspective on software & life" />
                            <div className='w-36 mx-auto mb-6 relative group'>
                                <div className="absolute inset-0 bg-emerald-500/20 rounded-xl blur-lg group-hover:bg-emerald-500/30 transition-all"></div>
                                <Image src={bookImage} alt='Book Cover' className="relative z-10 drop-shadow-xl hover:scale-105 transition-transform duration-300" />
                            </div>
                        </Card>

                        {/* Toolbox Card */}
                        <Card className="h-[340px] p-0 md:col-span-3 lg:col-span-2 flex flex-col justify-between">
                            <CardHeader title="My ToolBox" description="Technologies & frameworks I leverage to craft digital experiences" />
                            <div className="my-auto py-2">
                                <ToolBoxItems toolboxItems={toolboxItems} className="my-2" itemsWrapperClassName="animate-move-left" />
                                <ToolBoxItems toolboxItems={toolboxItems} className="my-2" itemsWrapperClassName="-translate-x-1/2 animate-move-right" />
                            </div>
                        </Card>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8'>
                        {/* Hobbies Card */}
                        <Card className="h-[340px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                            <CardHeader title="Beyond the Code" description="Drag to explore my passions and interests outside engineering" className="px-6 py-6" />
                            <div className='relative flex-1 cursor-grab active:cursor-grabbing overflow-hidden' ref={constraintRef}>
                                {hobbies.map(hobby => (
                                    <motion.div 
                                        key={hobby.title} 
                                        className='inline-flex gap-2 px-5 py-2 items-center bg-emerald-500/10 border border-emerald-400/30 rounded-full text-emerald-300 backdrop-blur-md shadow-lg font-semibold text-sm hover:border-emerald-400/60 absolute'
                                        style={{ left: hobby.left, top: hobby.top }}
                                        drag
                                        dragConstraints={constraintRef}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>

                        {/* Location Map Card */}
                        <Card className="h-[340px] p-0 relative md:col-span-2 lg:col-span-1 overflow-hidden">
                            <Image src={MapImage} alt='Location map' className='h-full w-full object-cover object-left-top filter contrast-125 brightness-90' />
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full flex items-center justify-center'>
                                <div className='absolute inset-0 rounded-full bg-emerald-400/30 -z-10 animate-ping [animation-duration:2.5s]'></div>
                                <div className='absolute inset-0 rounded-full bg-emerald-500/20 -z-20 animate-pulse'></div>
                                <div className="size-16 rounded-full bg-gray-950 border border-emerald-400/50 p-1 flex items-center justify-center shadow-2xl">
                                    <Image src={SmileImage} alt='Avatar' className='size-14' />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About