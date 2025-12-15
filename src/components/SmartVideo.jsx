import { useRef, useEffect, useState } from 'react'

const SmartVideo = ({ src, poster, ...props }) => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current.play().catch(e => console.log("Autoplay prevented:", e))
                    setIsPlaying(true)
                } else {
                    videoRef.current.pause()
                    setIsPlaying(false)
                }
            },
            { threshold: 0.5 } // Play when 50% visible
        )

        if (videoRef.current) {
            observer.observe(videoRef.current)
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current)
            }
        }
    }, [])

    return (
        <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted // Required for most autoplay
            loop
            playsInline
            controls // Enables Volume, Fullscreen, Play/Pause
            style={{ ...props.style, outline: 'none' }} // Ensure no ugly outlines
            {...props}
        />
    )
}

export default SmartVideo
