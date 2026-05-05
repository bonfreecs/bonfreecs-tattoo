import React, { useState, useEffect } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'

const topLine = [
    { char: 'I', direction: 'top' },
    { char: 'N', direction: 'left' },
    { char: 'K', direction: 'bottom' },
    { char: 'E', direction: 'right' },
    { char: 'D', direction: 'top' }
]

const bottomLine = [
    { char: 'S', direction: 'top' },
    { char: 'O', direction: 'bottom' },
    { char: 'U', direction: 'right' },
    { char: 'L', direction: 'top' },
    { char: 'S', direction: 'left' }
]

const AnimatedTitle = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 300)
        return () => clearTimeout(timer)
    }, [])

    return (
        <h1 className="hero-title">
            <div className="hero-title-container">
                <div className="title-line">
                    {topLine.map((letter, index) => (
                        <span
                            key={index}
                            className={`letter-animate ${letter.direction} ${visible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {letter.char}
                        </span>
                    ))}
                </div>
                <div className="title-line">
                    {bottomLine.map((letter, index) => (
                        <span
                            key={index}
                            className={`letter-animate ${letter.direction} ${visible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${(index + 5) * 0.1}s` }}
                        >
                            {letter.char}
                        </span>
                    ))}
                </div>
            </div>
        </h1>
    )
}

export default function Home() {
    const featuredWork = [
        { title: 'Neo-Traditional Wolf', style: 'Color • 2025', class: 'large', image: '/images/portfolio/tat4.jpg' },
        { title: 'Geometric Mandala', style: 'Blackwork • 2025', class: '', image: '/images/portfolio/tat3.jpg' },
        { title: 'Japanese Koi', style: 'Traditional • 2024', class: '', image: '/images/portfolio/tat2.jpg' }
    ]
    
    return (
        <MainLayout>
            <section className="hero">
                <div className="hero-content">
                    <AnimatedTitle />
                    <p className="hero-subtitle neon-text">Where darkness meets artistry</p>
                    <p className="hero-desc">Bespoke design. Precise execution. Timeless art.</p>
                    <div className="hero-cta">
                        <Link href="/portfolio" className="neon-button large">View Portfolio</Link>
                    </div>
                </div>
            </section>
             
            <section className="featured-work">
                <h2 className="section-title neon-text">FEATURED WORK</h2>
                <div className="work-grid">
                    {featuredWork.map((work, i) => (
                        <div key={i} className={`work-item ${work.class}`} data-animate="fade-up">
                            <div className="work-image">
                                <img 
                                    src={work.image} 
                                    alt={work.title}
                                    className="work-img"
                                    loading="lazy"
                                />
                                <div className="neon-border-effect"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </MainLayout>
    )
}
