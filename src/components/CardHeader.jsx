import StarIcon from "@/assets/icons/star.svg"
import { twMerge } from "tailwind-merge"

const CardHeader = ({title, description, className}) => {
    return (
        <div className={twMerge("flex flex-col p-6", className)}>
            <div className='inline-flex items-center gap-2.5'>
                <StarIcon className="size-8 text-emerald-400 shrink-0 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                <h3 className='font-serif text-2xl md:text-3xl font-bold tracking-tight text-white'>{title}</h3>
            </div>
            <p className='text-xs md:text-sm text-white/70 mt-2 leading-relaxed'>{description}</p>
        </div>
    )
}

export default CardHeader