import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import ProjectCarousel from '../components/ProjectCarousel'

const projects = [
    {
        title: 'Dream Stream',
        category: 'Speculative AI',
        link: '/dream-stream',
        image: '/Speculative AI/dream stream Poster 2.jpeg',
    },
    {
        title: 'Short Films',
        category: 'Cinematography',
        link: '/short-films',
        image: '/Shortfilms/SHORTFILM POSTER.jpeg',
    },
    {
        title: 'Photography',
        category: 'Visual Arts',
        link: '/photography',
        image: '/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/1.png',
    },
    {
        title: 'Brand Identity',
        category: 'Identity System',
        link: '/branding',
        image: '/Brand Identity/BR/6.jpg',
    },
    {
        title: 'UI/UX',
        category: 'Mindora',
        link: '/ui-ux',
        image: '/UI UX/Yellow and Pink Gradient Simple Abstract Mobile Apps Presentation/1.png',
    },
    {
        title: 'Publication Design',
        category: 'Fertility Festivals',
        link: '/publication',
        image: '/Publication Design/book stack.png',
    },
]

const Home = () => {
    return (
        <main>
            <Navigation />
            <Hero />
            <section id="projects" className="carousel-section">
                <ProjectCarousel projects={projects} />
            </section>
        </main>
    )
}

export default Home
