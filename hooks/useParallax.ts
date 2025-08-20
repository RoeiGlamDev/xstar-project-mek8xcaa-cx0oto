import { useEffect, useState } from 'react';

const useParallax = (speed: number) => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        setOffset(window.scrollY * speed); // Adjusts offset based on scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up event listener
        };
    }, []);

    return offset; // Returns the calculated parallax offset
};

export default useParallax;