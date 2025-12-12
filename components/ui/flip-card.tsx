import React from 'react';
import { cn } from '../../lib/utils';

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  front: React.ReactNode;
  back: React.ReactNode;
}

export const FlipCard: React.FC<FlipCardProps> = ({ front, back, className, ...props }) => {
  return (
    <div className={cn("group h-[600px] w-full [perspective:1000px]", className)} {...props}>
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-3xl overflow-hidden shadow-2xl">
          {front}
        </div>
        {/* Back */}
        <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-3xl overflow-hidden shadow-2xl">
          {back}
        </div>
      </div>
    </div>
  );
};