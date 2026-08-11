'use client';

import ArrowUprightIcon from "@/assets/icons/arrow-up-right.svg"
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className="py-16 pt-14 lg:py-24 lg:pt-20" id="contact-banner">
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 py-8 px-10 rounded-3xl text-center md:text-left flex flex-col gap-8 md:flex-row items-center justify-between shadow-2xl">
                    <div className="max-w-xl">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Let's create something amazing together</h2>
                        <p className="text-sm md:text-base mt-2 opacity-90 leading-relaxed">Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.</p>
                    </div>
                    <a href="/contact">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            className="text-white rounded-xl bg-gray-950 hover:bg-gray-900 inline-flex items-center px-6 h-12 gap-2 font-bold shadow-lg transition-colors"
                        >
                            <span>Contact Me</span>
                            <ArrowUprightIcon className="size-4" />
                        </motion.button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact