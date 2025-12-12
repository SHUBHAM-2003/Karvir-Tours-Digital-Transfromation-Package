import React, { useRef } from 'react';
import { cn } from '../../lib/utils';

interface HolographicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ children, className, ...props }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
        card.style.setProperty('--bg-x', '50%');
        card.style.setProperty('--bg-y', '50%');
    };

    return (
        <div 
            className={cn(
                "relative h-full w-full rounded-2xl bg-slate-800/80 border border-slate-700 backdrop-blur-md overflow-hidden transition-all duration-200 ease-out hover:shadow-2xl hover:shadow-brand-500/10",
                className
            )}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform'
            }}
            {...props}
        >
            {/* Holographic Glow Effect */}
            <div 
                className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay"
                style={{
                    background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.15) 0%, transparent 60%)`,
                }} 
            />
            
            {/* Border Spotlight */}
             <div 
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(14, 165, 233, 0.15) 0%, transparent 40%)`,
                }} 
            />

            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};

export default HolographicCard;