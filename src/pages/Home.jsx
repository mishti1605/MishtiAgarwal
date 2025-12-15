import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <main>
            <Navigation />
            <Hero />
            <section style={{ minHeight: '100vh', padding: '100px 20px', background: '#0a0a0a' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '3rem', marginBottom: '4rem', borderLeft: '4px solid #8a0000', paddingLeft: '1rem' }}
                    >
                        Projects
                    </motion.h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}>
                        <ProjectCard
                            title="Dream Stream"
                            category="Speculative AI"
                            link="/dream-stream"
                            image="/Speculative AI/dream stream Poster 2.jpeg"
                        />
                        <ProjectCard
                            title="Mindora"
                            category="UI/UX · App Design"
                            link="/ui-ux"
                            image="/UI UX/Yellow and Pink Gradient Simple Abstract Mobile Apps Presentation/1.png"
                        />
                        <ProjectCard
                            title="Fertility Festivals"
                            category="Publication Design"
                            link="/publication"
                            image="/Publication Design/book stack.png"
                        />
                        <ProjectCard
                            title="Short Films"
                            category="Cinematography"
                            link="/short-films"
                            image="/Shortfilms/SHORTFILM POSTER.jpeg"
                        />
                        <ProjectCard
                            title="Branding"
                            category="Identity"
                            link="/branding"
                            image="/Brand Identity/BR/6.jpg"
                        />
                        <ProjectCard
                            title="Photography"
                            category="Visual Arts"
                            link="/photography"
                            image="/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/1.png"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
