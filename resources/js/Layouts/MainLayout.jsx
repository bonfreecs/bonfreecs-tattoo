import React, { useState, useEffect } from 'react'
import { Link, usePage } from '@inertiajs/react'
import CustomCursor from '@/Components/CustomCursor'
import TattooParticles from '@/Components/TattooParticles'
import BookingModal from '@/Components/BookingModal'

const logoLetters = ['B', 'O', 'N', 'F', 'R', 'E', 'E', 'C', 'S']

export default function MainLayout({ children }) {
    const { url } = usePage()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isBookingOpen, setIsBookingOpen] = useState(false)

    useEffect(() => {
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate')
                }
            })
        }, observerOptions)
        
        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
        
        return () => observer.disconnect()
    }, [])

    const isActive = (path) => url === path

    return (
        <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden" style={{ cursor: 'none' }}>
            <TattooParticles />
            <CustomCursor />
            
            <nav className="neon-nav" style={{ position: 'relative', zIndex: 50 }}>
                <div className="nav-brand">
                    <Link href="/" className="text-logo">
                        <div>
                            {logoLetters.map((letter, index) => (
                                <span 
                                    key={index}
                                    className="letter-animate left"
                                    style={{ 
                                        animationDelay: `${index * 0.2}s`,
                                        opacity: 0,
                                        animation: `logoFlyIn 0.6s ease-out ${index * 0.2}s forwards`
                                    }}
                                >
                                    {letter}
                                </span>
                            ))}
                        </div>
                    </Link>
                </div>
                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><Link href="/" className={`neon-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
                    <li><Link href="/about" className={`neon-link ${isActive('/about') ? 'active' : ''}`}>About</Link></li>
                    <li><Link href="/portfolio" className={`neon-link ${isActive('/portfolio') ? 'active' : ''}`}>Portfolio</Link></li>
                </ul>
                <div className="nav-cta">
                    <button onClick={() => setIsBookingOpen(true)} className="neon-button">Message Me</button>
                </div>
                <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span></span><span></span><span></span>
                </div>
            </nav>

            <BookingModal 
                isOpen={isBookingOpen} 
                onClose={() => setIsBookingOpen(false)} 
            />

            <main key={url} className="page-transition">{children}</main>

            <footer className="neon-footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo-text">
                            BONFREECS
                        </div>
                        <p>Dark Art Tattoo Studio</p>
                    </div>
                    <div className="footer-links">
                        <h3>NAVIGATE</h3>
                        <ul>
                            <li><Link href="/" className="neon-link">Home</Link></li>
                            <li><Link href="/about" className="neon-link">About</Link></li>
                            <li><Link href="/portfolio" className="neon-link">Portfolio</Link></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h3>FOLLOW US</h3>
                        <div className="social-icons">
                            <a href="https://www.tiktok.com/@bonfreecs_tattoo" className="neon-icon" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.56a8.19 8.19 0 0 0 3.77.94V6.69h-4.44z"/>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61576293830823" className="neon-icon" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 320 512" fill="currentColor">
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 BONFREECS Tattoo. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
