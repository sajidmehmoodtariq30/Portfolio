import React from 'react'

const SectionHeader = ({
    title,
    eyebrow,
    description
}) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="flex justify-center mb-3">
                <span className="badge-glow-emerald px-4 py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest text-emerald-300">
                    {eyebrow}
                </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient-white mt-2">{title}</h2>
            <p className="text-center text-white/70 mt-4 text-base max-w-xl mx-auto md:text-lg leading-relaxed">{description}</p>
        </div>
    )
}

export default SectionHeader
