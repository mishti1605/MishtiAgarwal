import { useEffect, useRef, useState } from 'react'

const VimeoVideo = ({ videoId, ...props }) => {
    const containerRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const iframe = containerRef.current?.querySelector('iframe')
                if (!iframe) return

                if (entry.isIntersecting) {
                    // Play when visible
                    iframe.contentWindow?.postMessage('{"method":"play"}', '*')
                    setIsPlaying(true)
                } else {
                    // Pause when not visible
                    iframe.contentWindow?.postMessage('{"method":"pause"}', '*')
                    setIsPlaying(false)
                }
            },
            { threshold: 0.5 }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={containerRef}
            style={{
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                height: 0,
                overflow: 'hidden',
                ...props.style
            }}
        >
            <iframe
                src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&autoplay=1&muted=1&loop=1&controls=1`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}
                title={`Vimeo video ${videoId}`}
            />
        </div>
    )
}

export default VimeoVideo
