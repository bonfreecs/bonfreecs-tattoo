import React, { useState } from 'react';

export default function BookingModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        style: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.phone.length !== 11) {
            alert('Please enter a valid 11-digit phone number.');
            return;
        }
        alert('Thank you for your booking request! We will contact you within 24 hours.');
        onClose();
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            backdropFilter: 'blur(5px)'
        }}>
            <div style={{
                background: '#0a0a0a',
                border: '2px solid #00d4ff',
                borderRadius: '10px',
                padding: '2rem',
                maxWidth: '500px',
                width: '90%',
                maxHeight: '90vh',
                overflow: 'auto',
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ color: '#00d4ff', fontFamily: 'var(--font-display)', letterSpacing: '2px' }}>
                        BOOK APPOINTMENT
                    </h2>
                    <button onClick={onClose} style={{
                        background: 'none',
                        border: 'none',
                        color: '#00d4ff',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}>
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                background: '#1a1a2e',
                                border: '1px solid rgba(0, 212, 255, 0.3)',
                                borderRadius: '5px',
                                color: 'white',
                                fontSize: '1rem'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                background: '#1a1a2e',
                                border: '1px solid rgba(0, 212, 255, 0.3)',
                                borderRadius: '5px',
                                color: 'white',
                                fontSize: '1rem'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="tel"
                            placeholder="Phone Number (11 digits)"
                            value={formData.phone}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '').slice(0, 11);
                                handleChange('phone', value);
                            }}
                            maxLength={11}
                            pattern="[0-9]{11}"
                            required
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                background: '#1a1a2e',
                                border: '1px solid rgba(0, 212, 255, 0.3)',
                                borderRadius: '5px',
                                color: 'white',
                                fontSize: '1rem'
                            }}
                        />
                        {formData.phone.length > 0 && formData.phone.length !== 11 && (
                            <p style={{ color: '#ff4444', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                                Phone number must be exactly 11 digits
                            </p>
                        )}
                    </div> 
                    
                    <div style={{ marginBottom: '1rem' }}>
                        <select
                            value={formData.style}
                            onChange={(e) => handleChange('style', e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                background: '#1a1a2e',
                                border: '1px solid rgba(0, 212, 255, 0.3)',
                                borderRadius: '5px',
                                color: 'white',
                                fontSize: '1rem'
                            }}
                        >
                            <option value="">Select Tattoo Style</option>
                            <option value="Dark Art">Dark Art</option>
                            <option value="Traditional">Traditional</option>
                            <option value="Blackwork">Blackwork</option>
                            <option value="Color Realism">Color Realism</option>
                            <option value="Custom Design">Custom Design</option>
                        </select>
                    </div>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                        <textarea
                            placeholder="Your Vision"
                            rows="4"
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                background: '#1a1a2e',
                                border: '1px solid rgba(0, 212, 255, 0.3)',
                                borderRadius: '5px',
                                color: 'white',
                                fontSize: '1rem',
                                resize: 'vertical'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '0.8rem 2rem',
                            background: 'transparent',
                            color: '#00d4ff',
                            border: '2px solid #00d4ff',
                            borderRadius: '5px',
                            fontSize: '1rem',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-display)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#00d4ff';
                            e.target.style.color = '#0a0a0a';
                            e.target.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = '#00d4ff';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        SEND
                    </button>
                </form>
            </div>
        </div>
    );
}
