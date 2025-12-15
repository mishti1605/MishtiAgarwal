import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', updateMousePosition)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                x: mousePosition.x - 16, // Center the 32px circle
                y: mousePosition.y - 16,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '2px solid #f0f0f0',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'difference',
                backgroundColor: isHovering ? '#f0f0f0' : 'transparent'
            }}
            animate={{
                scale: isHovering ? 2.5 : 1,
                opacity: 1
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
        />
    )
}

export default CustomCursor
