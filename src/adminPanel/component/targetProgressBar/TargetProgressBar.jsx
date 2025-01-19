import { CircularProgress, Box, Typography, Card } from '@mui/material';
import { useState, useEffect } from 'react';

function TargetProgressBar() {
    const target = 10000;
    const achieved = 8500;

    const [progress, setProgress] = useState(0);
    const percentage = Math.min((achieved / target) * 100, 100);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                const nextProgress = prevProgress + 2;
                if (nextProgress >= percentage) {
                    clearInterval(timer);
                    return percentage;
                }
                return nextProgress;
            });
        }, 30);

        return () => {
            clearInterval(timer);
        };
    }, [percentage]);

    return (
        <Card
            sx={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: 'center',
                boxShadow: '0px 4px 12px rgba(87, 179, 62, 0.2)',
                bgcolor: "#3e403d0f",
            }}
        >
            <Typography variant="h5" color="white" gutterBottom>
                EV Monthly Target
            </Typography>
            <Box
                position="relative"
                display="inline-flex"
                alignItems="center"
                mt={"10px"}
            >
                <CircularProgress
                    variant="determinate"
                    value={progress}
                    size={220}
                    thickness={5}
                    sx={{
                        color: 'rgb(32, 201, 151)'
                    }}
                />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="h6" component="div" color="white">
                        {`${Math.round(progress)}%`}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                mt: "10px"
            }}>
                <Box>
                    <Typography variant='h4' color="white">₹5,870</Typography>
                    <Typography color={"rgb(32, 201, 151)"}>Revenue</Typography>
                </Box>
                <Box>
                    <Typography variant='h4' color="white">₹7,870</Typography>
                    <Typography color={"rgb(32, 201, 151)"}>Target</Typography>
                </Box>
            </Box>
        </Card>
    );
}

export default TargetProgressBar;