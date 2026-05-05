import React, { useState, useEffect } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'

const aboutLetters = [
    { char: 'A', direction: 'top' },
    { char: 'B', direction: 'left' },
    { char: 'O', direction: 'bottom' },
    { char: 'U', direction: 'right' },
    { char: 'T', direction: 'top' },
    { char: 'U', direction: 'left' },
    { char: 'S', direction: 'bottom' }
]

const AnimatedAbout = () => {
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 300)
        return () => clearTimeout(timer)
    }, [])
    
    return (
                <h1 className="page-title glitch" data-text="ABOUTUS">
                    {aboutLetters.map((letter, index) => (
                        <span
                            key={index}
                            className={`letter-animate ${letter.direction} ${visible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {letter.char}
                        </span>
                    ))}
                </h1>
    )
}

export default function About() {
    return (
        <MainLayout>
            <section className="page-hero">
                <AnimatedAbout />
                <p className="page-subtitle neon-text">The artist behind the ink</p>
            </section>

            <section className="about-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="artist-single" data-animate="fade-up" style={{ maxWidth: '600px', width: '100%' }}>
                    <div className="artist-card featured">
                        <div className="artist-avatar">
                            <img src="/images/portfolio/bon.jpg" alt="Patrick Mella" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                        </div>
                        <h3>Patrick Mella</h3>
                        <p className="artist-title neon-text">Founder & Lead Artist</p>
                        <p className="artist-desc">Obsessed with the craft. Constantly evolving, forever learning, and always pushing the needle forward. Bonfreecs Tattoo embraces the philosophy that tattoos are more than skin deep — they're permanent expressions of identity, memory, and art.</p>
                    </div>
                </div>
            </section>

            <section className="studio-features">
                <h2 className="section-title neon-text">OUR STUDIO</h2>
                <div className="studio-grid">
                        {[
                            { icon: '⚙', title: 'Artist Station', desc: 'Artist has a dedicated workspace with premium equipment.' },
                            { icon: '⚔', title: 'Sterilization Room', desc: 'Medical-grade autoclave and strict hygiene protocols.' },
                            { icon: '☂', title: 'Consultation Lounge', desc: 'Private space to discuss your vision in comfort.' }
                        ].map((item, i) => (
                        <div key={i} className="studio-item" data-animate="zoom-in">
                            <div className="studio-icon neon-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </MainLayout>
    )
}
