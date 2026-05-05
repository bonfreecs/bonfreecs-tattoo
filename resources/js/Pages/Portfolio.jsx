import React, { useState, useEffect } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import SpiderParticles from '@/Components/SpiderParticles'

const portfolioLetters = [
    { char: 'P', direction: 'top' },
    { char: 'O', direction: 'left' },
    { char: 'R', direction: 'bottom' },
    { char: 'T', direction: 'right' },
    { char: 'F', direction: 'top' },
    { char: 'O', direction: 'left' },
    { char: 'L', direction: 'bottom' },
    { char: 'I', direction: 'right' },
    { char: 'O', direction: 'top' }
]

const AnimatedPortfolio = () => {
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 300)
        return () => clearTimeout(timer)
    }, [])
    
    return (
        <h1 className="page-title glitch" data-text="PORTFOLIO">
            {portfolioLetters.map((letter, index) => (
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

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all')
    
    const portfolioItems = [
        { id: 1, title: 'Demonic Portrait', style: 'Dark Art • 2025', category: 'dark-art', image: '/images/portfolio/tat1.jpg' },
        { id: 2, title: 'Japanese Dragon', style: 'Traditional • 2025', category: 'traditional', image: '/images/portfolio/tat2.jpg' },
        { id: 3, title: 'Geometric Sleeve', style: 'Blackwork • 2024', category: 'blackwork', image: '/images/portfolio/tat3.jpg' },
        { id: 4, title: 'Neo-Traditional Rose', style: 'Color • 2025', category: 'color', image: '/images/portfolio/tat4.jpg' },
        { id: 5, title: 'Skull Mandala', style: 'Dark Art • 2024', category: 'dark-art', image: '/images/portfolio/tat5.jpg' },
        { id: 6, title: 'Dotwork Wolf', style: 'Blackwork • 2025', category: 'blackwork', image: '/images/portfolio/tat6.jpg' },
        { id: 7, title: 'Watercolor Phoenix', style: 'Color • 2025', category: 'color', image: '/images/portfolio/tat7.jpg' },
        { id: 8, title: 'American Traditional', style: 'Traditional • 2024', category: 'traditional', image: '/images/portfolio/tat8.jpg' },
        { id: 9, title: 'New School Piece', style: 'Color • 2025', category: 'color', image: '/images/portfolio/tat9.jpg' }
    ]

    const filters = ['all']

    return (
        <MainLayout>
            <section className="page-hero">
                <AnimatedPortfolio />
                <p className="page-subtitle neon-text">Witness the art of darkness</p>
            </section>

            <section className="portfolio-filter">
                {filters.map(filter => (
                    <button 
                        key={filter}
                        className={`filter-btn ${activeFilter === filter ? 'active' : ''} neon-button-outline`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter === 'all' ? 'All Work' : filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
                    </button>
                ))}
            </section>

            <section className="portfolio-grid">
                {portfolioItems
                    .filter(item => activeFilter === 'all' || item.category === activeFilter)
                    .map((item, i) => (
                        <div key={item.id} className="portfolio-item" data-animate="fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="portfolio-image">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    loading="lazy"
                                    className="portfolio-img"
                                />
                                <div className="neon-border"></div>
                            </div>
                        </div>
                    ))}
            </section>
        </MainLayout>
    )
}
