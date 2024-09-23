import { Card, Typography } from '@mui/material'
import { Stack } from '@mui/system';

function DashboardCard({ data }) {
    return (
        <Card
            sx={{
                padding: "2rem",
                borderRadius: "1rem",
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                bgcolor: "#34345a"
            }}
        >
            <Stack>
                <Stack sx={{ borderRadius: "10px", p: ".5rem", bgcolor: data.bgColor, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)' }}>
                    {data.typeIcon}
                </Stack>
            </Stack>
            <Stack color={"text.secondary"}>
                <Typography variant='h4' mb=".4rem" color='black'>{data.totalCount}</Typography>
                <Typography mb="1rem">{data.type}</Typography>
                <Typography sx={{ fontSize: ".8rem" }}>
                    <Typography sx={{ fontSize: ".8rem", color: data.incOrDec === "inc" ? "rgb(32, 201, 151)" : "rgb(255, 77, 79)", display: "inline", mr: ".6rem" }}>{data.arrowIcon} {data.Percentage}</Typography>{data.duration}</Typography>
            </Stack>
        </Card>
    )
}

export default DashboardCard;