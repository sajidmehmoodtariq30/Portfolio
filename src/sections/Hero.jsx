'use client';

import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import GrainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import Image from 'next/image'
import HeroOrbit from '@/components/HeroOrbit'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='py-32 md:py-48 lg:py-56 relative z-0 overflow-x-clip min-h-screen flex items-center justify-center'>
      {/* Lightweight Hardware-Accelerated Ambient Backdrop */}
      <div 
        className="absolute inset-0 pointer-events-none -z-20 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.12) 0%, transparent 60%), radial-gradient(circle at 75% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)'
        }}
      ></div>

      <div className='absolute inset-0 [mask-image:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,1))] pointer-events-none'>
        <div
          className='absolute inset-0 -z-30 opacity-5'
          style={{ backgroundImage: `url(${GrainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>

        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        
        <HeroOrbit size={430} rotation={-14} orbitDuration='30s' spinDuration='6s'>
          <SparkleIcon className="size-8 text-emerald-300/30" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={78} orbitDuration='32s' spinDuration='6s'>
          <SparkleIcon className="size-5 text-cyan-300/30" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} orbitDuration='34s'>
          <div className="size-2 bg-emerald-400/40 rounded-full shadow-[0_0_10px] shadow-emerald-400"></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} orbitDuration='36s' spinDuration='6s'>
          <SparkleIcon className="size-10 text-emerald-400/25" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} orbitDuration='38s' spinDuration='8s'>
          <StarIcon className="size-12 text-emerald-400" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} orbitDuration='40s' spinDuration='8s'>
          <StarIcon className="size-8 text-cyan-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} orbitDuration='42s'>
          <div className="size-2 bg-cyan-400/40 rounded-full shadow-[0_0_10px] shadow-cyan-400"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} orbitDuration='44s' spinDuration='6s'>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} orbitDuration='46s'>
          <div className="size-3 bg-emerald-300/30 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} orbitDuration='48s' spinDuration='8s'>
          <StarIcon className="size-28 text-emerald-400/80" />
        </HeroOrbit>
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='flex flex-col items-center justify-center text-center'
        >
          {/* Memoji Avatar with Subtle Pulse Ring */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
            <Image src={memojiImage} className='size-[110px] relative z-10 drop-shadow-2xl' alt="Sajid Mehmood Tariq Avatar" priority />
          </div>

          {/* Status Badge */}
          <div className='badge-glow-emerald px-4 py-1.5 inline-flex items-center gap-2.5 rounded-full backdrop-blur-xl mb-6 shadow-xl'>
            <div className='bg-emerald-400 size-2.5 rounded-full relative'>
              <div className='absolute inset-0 size-2.5 bg-emerald-400 rounded-full animate-ping opacity-75'></div>
            </div>
            <div className='text-xs md:text-sm font-semibold text-emerald-300 tracking-wider uppercase'>Available for new Projects</div>
          </div>

          {/* Headline */}
          <div className='max-w-2xl mx-auto'>
            <h1 className='font-serif text-4xl sm:text-5xl md:text-6xl text-center tracking-tight font-bold text-gradient-white leading-tight'>
              Sajid Mehmood Tariq
            </h1>
            <p className='mt-5 text-lg md:text-xl text-gradient-emerald font-semibold tracking-wide'>
              Full-Stack Developer & CS Student
            </p>
            <p className='mt-4 text-center text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto'>
              Architecting fluid, high-performing web applications with cutting-edge design, resilient full-stack systems, and polished user experiences.
            </p>
          </div>

          {/* CTAs */}
          <div className='flex flex-col sm:flex-row justify-center items-center mt-10 gap-4 w-full sm:w-auto'>
            <a href="/#projects" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className='inline-flex items-center justify-center gap-2 border border-white/15 hover:border-emerald-400/50 bg-white/5 hover:bg-white/10 text-white px-7 h-13 rounded-2xl backdrop-blur-md transition-all duration-300 shadow-xl w-full sm:w-auto group'
              >
                <span className='font-bold text-sm md:text-base'>Explore My Projects</span>
                <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform duration-300" />
              </motion.button>
            </a>
            <a href="/contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className='inline-flex items-center justify-center gap-2.5 border border-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-950 px-7 h-13 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-emerald-500/25 w-full sm:w-auto text-sm md:text-base'
              >
                <span>👋</span>
                <span>Let's Connect</span>
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
