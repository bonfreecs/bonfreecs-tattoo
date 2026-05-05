import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const updateCursor = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        window.addEventListener('mousemove', updateCursor);

        return () => window.removeEventListener('mousemove', updateCursor);
    }, []);

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: '30px',
                height: '30px',
                pointerEvents: 'none',
                zIndex: 99999,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="smokeGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feMerge>
                            <feMergeNode in="blur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <radialGradient id="smokeGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8"/>
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#00d4ff" stopOpacity="0"/>
                    </radialGradient>
                </defs>
                <circle cx="15" cy="15" r="8" fill="url(#smokeGradient)" filter="url(#smokeGlow)"/>
                <circle cx="15" cy="15" r="4" fill="#00d4ff" opacity="0.9"/>
                <circle cx="15" cy="15" r="12" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.3">
                    <animate attributeName="r" values="12;15;12" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite"/>
                </circle>
            </svg>
        </div>
    );
}
