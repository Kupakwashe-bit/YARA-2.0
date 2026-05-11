import Image from "next/image"

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  showGear?: boolean
  className?: string
}

const sizeMap = {
  sm: { logo: 40, gear: 56, strokeWidth: 3 },
  md: { logo: 48, gear: 68, strokeWidth: 3 },
  lg: { logo: 320, gear: 380, strokeWidth: 4 },
  xl: { logo: 384, gear: 450, strokeWidth: 4 },
}

export function AnimatedLogo({ size = "md", showGear = true, className = "" }: AnimatedLogoProps) {
  const dimensions = sizeMap[size]
  const gearRadius = dimensions.gear / 2 - dimensions.strokeWidth
  const teethCount = size === "sm" || size === "md" ? 16 : 24
  
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Rotating Gear SVG */}
      {showGear && (
        <svg
          width={dimensions.gear}
          height={dimensions.gear}
          viewBox={`0 0 ${dimensions.gear} ${dimensions.gear}`}
          className="absolute animate-rotate-gear"
        >
          <defs>
            <linearGradient id={`gearGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00D4AA" stopOpacity="1" />
              <stop offset="100%" stopColor="#00D4AA" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Gear teeth */}
          <g
            fill="none"
            stroke={`url(#gearGradient-${size})`}
            strokeWidth={dimensions.strokeWidth}
            strokeLinecap="round"
          >
            {/* Main circle */}
            <circle
              cx={dimensions.gear / 2}
              cy={dimensions.gear / 2}
              r={gearRadius}
              strokeDasharray="4 8"
            />
            
            {/* Gear teeth - radiating lines */}
            {Array.from({ length: teethCount }).map((_, i) => {
              const angle = (i * 360) / teethCount
              const rad = (angle * Math.PI) / 180
              const cx = dimensions.gear / 2
              const cy = dimensions.gear / 2
              const innerR = gearRadius - 4
              const outerR = gearRadius + 6
              
              const x1 = cx + innerR * Math.cos(rad)
              const y1 = cy + innerR * Math.sin(rad)
              const x2 = cx + outerR * Math.cos(rad)
              const y2 = cy + outerR * Math.sin(rad)
              
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  strokeWidth={dimensions.strokeWidth + 1}
                />
              )
            })}
          </g>
        </svg>
      )}
      
      {/* Logo Image */}
      <Image
        src="/images/logo.png"
        alt="C.U.T Robotics Club Logo"
        width={dimensions.logo}
        height={dimensions.logo}
        className="relative z-10"
        priority={size === "lg" || size === "xl"}
      />
    </div>
  )
}
