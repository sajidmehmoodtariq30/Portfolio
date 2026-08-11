const HeroOrbit = ({ children, size, rotation, orbitDuration = "0s", spinDuration = "0s" }) => {
    return (
        <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 animate-spin will-change-transform"
            style={{
                animationDuration: orbitDuration,
                transformStyle: 'preserve-3d'
            }}
        >
            <div
                className="flex items-start justify-start"
                style={{
                    transform: `rotate(${rotation}deg)`,
                    height: `${size}px`,
                    width: `${size}px`,
                }}>
                <div 
                    className="animate-spin will-change-transform"
                    style={{
                        animationDuration: spinDuration
                    }}
                >
                    <div
                        className='inline-flex'
                        style={{ transform: `rotate(${rotation * -1}deg)` }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroOrbit