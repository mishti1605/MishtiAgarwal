import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProjectCard = ({ title, category, image, link, className }) => {
    const navigate = useNavigate()

    return (
        <motion.div
            className={className}
            onClick={() => navigate(link)}
            whileHover={{ scale: 0.98 }}
            style={{
                cursor: 'pointer',
                position: 'relative',
                height: '400px',
                background: '#1a1a1a',
                overflow: 'hidden',
                borderRadius: '4px'
            }}
        >
            {/* Image Placeholder */}
            <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#222', borderRadius: '4px', marginBottom: '1rem', position: 'relative' }}>
                {image ? (
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                ) : (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, #1a1a1a, #333)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#444',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>
                        {title[0]}
                    </div>
                )}
            </div>

            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <span style={{ color: '#8a0000', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{category}</span>
                <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{title}</h3>
            </div>
        </motion.div>
    )
}

export default ProjectCard
