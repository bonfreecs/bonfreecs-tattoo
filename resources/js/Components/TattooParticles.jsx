import { useEffect, useRef } from 'react';

export default function TattooParticles() {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        const tattooDesigns = ['rose', 'heart', 'anchor', 'skull', 'flash'];

        const createParticle = () => {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: 12 + Math.random() * 18,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.5,
                opacity: 0.3 + Math.random() * 0.4,
                design: tattooDesigns[Math.floor(Math.random() * tattooDesigns.length)]
            };
        };

        particlesRef.current = Array.from({ length: 35 }, () => createParticle());

        const drawTattooDesign = (particle) => {
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.rotate((particle.rotation * Math.PI) / 180);
            ctx.globalAlpha = particle.opacity;
            ctx.strokeStyle = 'rgba(200, 200, 200, 0.8)';
            ctx.lineWidth = 1.5;
            ctx.fillStyle = 'rgba(100, 100, 100, 0.3)';

            const s = particle.size;

            switch (particle.design) {
                case 'rose':
                    ctx.beginPath();
                    ctx.arc(0, 0, s * 0.4, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    for (let i = 0; i < 5; i++) {
                        const angle = (i / 5) * Math.PI * 2;
                        ctx.beginPath();
                        ctx.arc(Math.cos(angle) * s * 0.6, Math.sin(angle) * s * 0.6, s * 0.25, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                    ctx.beginPath();
                    ctx.moveTo(0, s * 0.4);
                    ctx.lineTo(0, s * 0.8);
                    ctx.stroke();
                    break;

                case 'heart':
                    ctx.beginPath();
                    ctx.moveTo(0, s * 0.3);
                    ctx.bezierCurveTo(-s * 0.5, -s * 0.3, -s * 0.5, -s * 0.6, 0, -s * 0.2);
                    ctx.bezierCurveTo(s * 0.5, -s * 0.6, s * 0.5, -s * 0.3, 0, s * 0.3);
                    ctx.fill();
                    ctx.stroke();
                    break;

                case 'anchor':
                    ctx.beginPath();
                    ctx.moveTo(0, -s * 0.5);
                    ctx.lineTo(0, s * 0.5);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(-s * 0.5, s * 0.2);
                    ctx.lineTo(s * 0.5, s * 0.2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(0, -s * 0.5, s * 0.3, Math.PI, 0);
                    ctx.stroke();
                    break;

                case 'skull':
                    ctx.beginPath();
                    ctx.arc(0, 0, s * 0.4, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                    ctx.beginPath();
                    ctx.arc(-s * 0.15, -s * 0.1, s * 0.08, 0, Math.PI * 2);
                    ctx.arc(s * 0.15, -s * 0.1, s * 0.08, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(-s * 0.15, s * 0.15);
                    ctx.lineTo(s * 0.15, s * 0.15);
                    ctx.stroke();
                    break;

                case 'flash':
                    ctx.beginPath();
                    ctx.moveTo(0, -s * 0.5);
                    ctx.lineTo(s * 0.3, s * 0.3);
                    ctx.lineTo(-s * 0.3, s * 0.1);
                    ctx.lineTo(s * 0.3, s * 0.1);
                    ctx.lineTo(-s * 0.3, s * 0.3);
                    ctx.lineTo(0, -s * 0.5);
                    ctx.stroke();
                    break;

                default:
                    ctx.beginPath();
                    ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2);
                    ctx.stroke();
            }

            ctx.restore();
        };

        const drawLine = () => {};

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;

            particlesRef.current.forEach((particle, index) => {
                if (!particle) return;

                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150 && dist > 0) {
                    particle.x -= (dx / dist) * 2;
                    particle.y -= (dy / dist) * 2;
                    particle.rotation += 2;
                } else {
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;
                    particle.rotation += particle.rotationSpeed;
                }

                if (particle.x < -50) particle.x = canvas.width + 50;
                if (particle.x > canvas.width + 50) particle.x = -50;
                if (particle.y < -50) particle.y = canvas.height + 50;
                if (particle.y > canvas.height + 50) particle.y = -50;

                drawTattooDesign(particle);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
}
