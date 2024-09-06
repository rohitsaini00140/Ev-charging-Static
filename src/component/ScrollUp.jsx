import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Stack } from '@mui/system';
function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setIsVisible(scrollTop > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <Stack
            onClick={handleScrollUp}
            sx={{
                position: 'fixed',
                bottom: 10,
                cursor: "pointer",
                right: 16,
                padding: "1rem",
                zIndex: "10",
                display: isVisible ? "block" : "none"
            }}
            className={`fixed bottom-10 cursor-pointer ${isVisible ? "block" : "hidden"} right-16 rounded-[5rem] p-[.1rem] z-10`}
        >
            <KeyboardArrowUpIcon sx={{ fontSize: "3rem", color: "white", backgroundColor: "rgb(87, 179, 62)", borderRadius: "5rem" }} />
        </Stack>
    );
};

export default ScrollUp;