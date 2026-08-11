import React from 'react'
import ArrowUprightIcon from "@/assets/icons/arrow-up-right.svg"

const footerLinks = [
  { title: 'GitHub', href: 'https://github.com/sajidmehmoodtariq-dev' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/sajidmehmoodtariq' },
  { title: 'CS50 Certificate', href: 'https://cs50.harvard.edu/certificates/f5aa59ca-26eb-4289-af0e-ccf00f4feb78' }
];

const Footer = () => {
  return (
    <footer className='relative overflow-x-clip z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-8'>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Sajid Mehmood Tariq</span>. All rights reserved.
          </div>
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a 
                key={link.title} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-emerald-400 font-medium transition-colors"
              >
                <span>{link.title}</span>
                <ArrowUprightIcon className="size-3.5" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer