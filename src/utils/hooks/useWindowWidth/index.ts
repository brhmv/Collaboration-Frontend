// istifade numunesi
// (const width = useWindowsWidth())

import { useState, useEffect } from 'react';

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };


        handleResize();


        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
};

export default useWindowWidth;
