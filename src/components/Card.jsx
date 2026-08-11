import GrainImage from '@/assets/images/grain.jpg'
import {twMerge} from "tailwind-merge"

const Card = ({className, children, ...other}) => {
    return (
        <div 
            className={twMerge(
                "glass-card-premium z-0 after:z-10 overflow-hidden rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:pointer-events-none transition-all duration-300",
                className
            )}
            {...other}
        >
            <div
                className='absolute inset-0 -z-10 opacity-5 pointer-events-none'
                style={{ backgroundImage: `url(${GrainImage.src})` }}
            ></div>
            {children}
        </div>
    )
}

export default Card
