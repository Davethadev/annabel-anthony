// testimonialAnimation.ts
import { useState } from 'react';

export interface Testimonial {
    id: number;
    comments: string[];
    name: string;
    role: string;
}

export const useTestimonialAnimation = (testimonials: Testimonial[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const prevTestimonial = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const updateCards = () => {
        const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;
        cards.forEach((card, index) => {
            const offset = index - currentIndex;
            card.style.zIndex = `${testimonials.length - Math.abs(offset)}`;
            card.style.transform = `translateX(${offset * 18}px) scale(${1 - Math.abs(offset) * 0.036})`;
            card.className = 'card';
            if (offset === 0) card.classList.add('card--current');
            else if (offset === 1) card.classList.add('card--next');
            else if (offset === -1) card.classList.add('card--prev');
            else card.classList.add('card--out');
        });
    };

    return {
        nextTestimonial,
        prevTestimonial,
        updateCards,
        currentIndex,
        isFirstCard: currentIndex === 0,
        isLastCard: currentIndex === testimonials.length - 1
    };
};