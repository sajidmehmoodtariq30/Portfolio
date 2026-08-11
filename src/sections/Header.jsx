'use client';

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { isSoundMuted, toggleSound, playClick } from '@/lib/sound'

const Header = () => {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(isSoundMuted());
  }, []);

  const handleToggleSound = () => {
    const newState = toggleSound();
    setMuted(newState);
    if (!newState) playClick();
  };

  return (
    <header className='flex justify-center items-center fixed top-4 w-full z-50 px-4'>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className='flex items-center gap-1 md:gap-1.5 p-1.5 rounded-full glass-nav-dock shadow-2xl'
      >
        <a href="/" onClick={() => playClick()} className='nav-item'>Home</a>
        <a href="/#projects" onClick={() => playClick()} className='nav-item'>Projects</a>
        <a href="/#testimonials" onClick={() => playClick()} className='nav-item'>Testimonials</a>
        <a href="/#about" onClick={() => playClick()} className='nav-item'>About</a>
        <a href="/blogs" onClick={() => playClick()} className='nav-item'>Blog</a>
        
        {/* Sound Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggleSound}
          title={muted ? "Unmute UI Sounds" : "Mute UI Sounds"}
          className="size-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-all ml-1 shrink-0"
        >
          {muted ? '🔇' : '🔊'}
        </motion.button>

        <motion.a 
          href="/contact" 
          onClick={() => playClick()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='nav-item bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-950 font-bold hover:brightness-110 shadow-lg shadow-emerald-500/20 text-xs md:text-sm px-4 py-1.5 ml-1'
        >
          Contact
        </motion.a>
      </motion.nav>
    </header>
  )
}

export default Header

