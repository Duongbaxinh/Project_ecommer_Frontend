import { useState, useEffect } from 'react';

export function useScrollPosition() {
    const [changePosition, setChangePosition] = useState(false);
    const [height, setHeight] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setHeight(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        if (height >= 90) {
            setChangePosition(true);
        } else {
            setChangePosition(false);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [height]);

    return changePosition;
}
