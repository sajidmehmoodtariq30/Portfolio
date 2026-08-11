'use client';

import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className='flex justify-center items-center fixed top-4 w-full z-50 px-4'>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className='flex items-center gap-1.5 p-1.5 rounded-full glass-nav-dock shadow-2xl'
      >
        <a href="/" className='nav-item'>Home</a>
        <a href="/#projects" className='nav-item'>Projects</a>
        <a href="/#testimonials" className='nav-item'>Testimonials</a>
        <a href="/#about" className='nav-item'>About</a>
        <a href="/blogs" className='nav-item'>Blog</a>
        <motion.a 
          href="/contact" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='nav-item bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-950 font-bold hover:brightness-110 shadow-lg shadow-emerald-500/20 text-xs md:text-sm px-4 py-2 ml-1'
        >
          Contact
        </motion.a>
      </motion.nav>
    </header>
  )
}

export default Header
