import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import DreamStream from './pages/DreamStream'
import UIUX from './pages/UIUX'
import About from './pages/About'
import Contact from './pages/Contact'
import Publication from './pages/Publication'
import ShortFilms from './pages/ShortFilms'
import Branding from './pages/Branding'
import Photography from './pages/Photography'
import { AnimatePresence } from 'framer-motion'

import Footer from './components/Footer'
import BackgroundEffect from './components/BackgroundEffect'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'

function App() {
    const location = useLocation()

    return (
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Preloader />
            <CustomCursor />
            <BackgroundEffect />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dream-stream" element={<DreamStream />} />
                    <Route path="/ui-ux" element={<UIUX />} />
                    <Route path="/publication" element={<Publication />} />
                    <Route path="/short-films" element={<ShortFilms />} />
                    <Route path="/branding" element={<Branding />} />
                    <Route path="/photography" element={<Photography />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </div>
    )
}

export default App
