import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const projects = [
    { name: 'Speculative AI', path: '/dream-stream', image: '/Speculative AI/dream stream Poster 2.jpeg' },
    { name: 'Short Films', path: '/short-films', image: '/Shortfilms/SHORTFILM POSTER.jpeg' },
    { name: 'Photography', path: '/photography', image: '/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/1.png' },
    { name: 'Brand Identity', path: '/branding', image: '/Brand Identity/BR/6.jpg' },
    { name: 'UI/UX', path: '/ui-ux', image: '/UI UX/Yellow and Pink Gradient Simple Abstract Mobile Apps Presentation/1.png' },
    { name: 'Publication Design', path: '/publication', image: '/Publication Design/book stack.png' }
]

const ProjectNavigation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const index = projects.findIndex(p => p.path === location.pathname)
        if (index !== -1) {
            setCurrentIndex(index)
        }
    }, [location.pathname])

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    const nextIndex = (currentIndex + 1) % projects.length

    const prevProject = projects[prevIndex]
    const nextProject = projects[nextIndex]

    return (
        <div style={{ padding: '4rem 2rem', background: '#0a0a0a', borderTop: '1px solid #222' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>

                {/* Previous Project */}
                <div
                    onClick={() => navigate(prevProject.path)}
                    style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '250px' }}
                >
                    <span style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Previous</span>
                    <div style={{ width: '100%', height: '150px', overflow: 'hidden', borderRadius: '12px', marginBottom: '1rem', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #333' }}>
                        <img src={prevProject.image} alt={prevProject.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', margin: 0 }}>{prevProject.name}</h4>
                </div>

                {/* View All */}
                <div
                    onClick={() => navigate('/', { state: { scrollToProjects: true } })}
                    style={{
                        cursor: 'pointer',
                        padding: '1rem 2rem',
                        border: '1px solid #333',
                        borderRadius: '30px',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        letterSpacing: '1px',
                        transition: 'all 0.3s ease',
                        color: '#fff'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#8a0000'; e.currentTarget.style.borderColor = '#8a0000' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#333' }}
                >
                    View All Projects
                </div>

                {/* Next Project */}
                <div
                    onClick={() => navigate(nextProject.path)}
                    style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '250px', textAlign: 'right' }}
                >
                    <span style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Next</span>
                    <div style={{ width: '100%', height: '150px', overflow: 'hidden', borderRadius: '12px', marginBottom: '1rem', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #333' }}>
                        <img src={nextProject.image} alt={nextProject.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', margin: 0 }}>{nextProject.name}</h4>
                </div>

            </div>
        </div>
    )
}

export default ProjectNavigation
