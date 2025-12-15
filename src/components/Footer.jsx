import { useRef } from 'react'

const Footer = () => {
    return (
        <footer style={{
            background: '#050505',
            padding: '4rem 2rem',
            borderTop: '1px solid #222',
            marginTop: 'auto',
            textAlign: 'center'
        }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>MISHTI AGARWAL</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <a href="mailto:mishtiagarwal14@gmail.com" style={{ color: '#888', textDecoration: 'none' }}>Contact</a>
                <a href="https://www.linkedin.com/in/mishtiagarwal" target="_blank" rel="noopener noreferrer" style={{ color: '#888', textDecoration: 'none' }}>LinkedIn</a>
                <a href="https://instagram.com/lensbymish" target="_blank" rel="noopener noreferrer" style={{ color: '#888', textDecoration: 'none' }}>Instagram</a>
            </div>
            <p style={{ color: '#444', fontSize: '0.8rem' }}>© {new Date().getFullYear()} Mishti Agarwal. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
