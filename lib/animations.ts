import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Animation utility functions
const useAnimation = (triggerRef: React.RefObject<HTMLElement>, animationProps: any) => {
    const animationRef = useRef<GSAPTimeline | null>(null);

    useEffect(() => {
        if (triggerRef.current) {
            animationRef.current = gsap.timeline({ paused: true })
                .from(triggerRef.current, animationProps.from)
                .to(triggerRef.current, animationProps.to);
        }
    }, [triggerRef, animationProps]);

    const playAnimation = () => {
        animationRef.current?.play();
    };

    return { playAnimation };
};

const fadeIn = {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 1 }
};

const slideIn = {
    from: { x: '-100%' },
    to: { x: '0%', duration: 1 }
};

export { useAnimation, fadeIn, slideIn }; 
export default useAnimation;