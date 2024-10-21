import { Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function DashboardCard({ data }) {
  return (
    <Card
      sx={{
        padding: "1.2rem 2rem",
        borderRadius: "1rem",
        // display: "flex",
        // flexDirection: "row",
        // gap: "1rem",
        boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)",
        bgcolor: "#3e403d0f",
      }}
    >
      <Stack sx={{display: "grid",
            placeItems: "center",}}>
        <Stack
          sx={{
            width: "45px",
            height: "45px",
            borderRadius: "10px",
            p: ".5rem",
            display: "grid",
            placeItems: "center",
            bgcolor: data.bgColor,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          {data.typeIcon}
        </Stack>
      </Stack>
      <Stack color={"text.secondary"}>
        <Typography variant="h4" mb=".4rem" color="white" marginTop="10px" textAlign="center">
          {data.totalCount}
        </Typography>
        <Typography mb="1rem" color="#ffffffa1" textAlign="center"> 
          {data.type}
        </Typography>
        <Typography sx={{ fontSize: ".8rem", color: "white" }}>
          <Typography
            sx={{
              fontSize: ".8rem",
              color:
                data.incOrDec === "inc"
                  ? "rgb(32, 201, 151)"
                  : "rgb(255, 77, 79)",
              display: "inline",
              mr: ".6rem",
            }}
          >
            {data.arrowIcon} {data.Percentage}
          </Typography>
          {data.duration}
        </Typography>
      </Stack>
    </Card>
  );
}

export default DashboardCard;
