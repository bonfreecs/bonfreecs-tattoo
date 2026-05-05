import { useEffect, useRef } from 'react';

export default function SpiderParticles() {
    const canvasRef = useRef(null);
    const spidersRef = useRef([]);
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

        const createSpider = () => {
            const anchorX = Math.random() * canvas.width;
            const anchorY = 0;
            return {
                anchorX,
                anchorY,
                x: anchorX,
                y: 50 + Math.random() * 200,
                size: 15 + Math.random() * 20,
                swingOffset: Math.random() * Math.PI * 2,
                swingSpeed: 0.02 + Math.random() * 0.03,
                legPhase: Math.random() * Math.PI * 2,
                opacity: 0.6 + Math.random() * 0.4,
                fallSpeed: 0.3 + Math.random() * 0.5,
                lineLength: 50 + Math.random() * 200
            };
        };

        spidersRef.current = Array.from({ length: 20 }, () => createSpider());

        const drawWebLine = (spider) => {
            ctx.strokeStyle = 'rgba(150, 150, 150, 0.5)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(spider.anchorX, spider.anchorY);
            ctx.lineTo(spider.x, spider.y);
            ctx.stroke();
        };

        const drawSpider = (spider) => {
            if (!spider) return;
            ctx.save();
            ctx.translate(spider.x, spider.y);
            ctx.globalAlpha = spider.opacity;

            ctx.strokeStyle = 'rgba(180, 180, 180, 0.8)';
            ctx.lineWidth = 2;

            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2 + spider.legPhase;
                const len = spider.size * 0.8 + Math.sin(spider.legPhase + i) * 5;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(angle) * len, Math.sin(angle) * len);
                ctx.stroke();
            }

            ctx.fillStyle = 'rgba(40, 40, 40, 0.95)';
            ctx.beginPath();
            ctx.arc(0, 0, spider.size * 0.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.beginPath();
            ctx.arc(-spider.size * 0.15, -spider.size * 0.15, spider.size * 0.1, 0, Math.PI * 2);
            ctx.arc(spider.size * 0.15, -spider.size * 0.15, spider.size * 0.1, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;

            spidersRef.current.forEach((spider, index) => {
                if (!spider) return;

                const dx = mouse.x - spider.x;
                const dy = mouse.y - spider.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150 && dist > 0) {
                    spider.x -= (dx / dist) * 3;
                    spider.legPhase += 0.3;
                } else {
                    spider.y += spider.fallSpeed;
                    spider.swingOffset += spider.swingSpeed;
                    spider.x = spider.anchorX + Math.sin(spider.swingOffset) * 30;
                    spider.legPhase += 0.1;
                }

                if (spider.y > canvas.height + 20) {
                    spidersRef.current[index] = createSpider();
                }

                drawWebLine(spider);
                drawSpider(spider);
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
