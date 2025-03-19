import { useState, useEffect } from 'react';

export function useScrollPosition(args) {
    const [changePosition, setChangePosition] = useState(false);
    const [height, setHeight] = useState(window.scrollY);
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleScroll = () => {
            setHeight(window.scrollY);
        };
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);


        if (height >= 90 && (args === null || args !== null || height < args)) {
            setChangePosition(true);
        } else {
            setChangePosition(false);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)

        };

    }, [args, height, width]);

    return { changePosition, height, width };
}
