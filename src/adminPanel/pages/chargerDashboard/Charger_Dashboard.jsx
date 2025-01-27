import { TextField, Typography } from "@mui/material";
import { Container, Card, CardContent, Button } from "@mui/material";
import { Grid } from "@mui/system";
import React, { useState } from "react";

function Charger_Dashboard() {
  const [selectedChargerId, setSelectedChargerId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [actionVisibility, setActionVisibility] = useState({}); // Track visibility of each action's TextField

  const chargerData = {
    id: "CHG12345",
    project: "EV Charging Station",
    status: "Active",
  };

  const actions = [
    "Change Availability",
    "Change Configurations",
    "Remote Start",
    "Remote Stop",
  ];

  const handleButtonClick = () => {
    if (selectedChargerId) {
      setSelectedChargerId(null);
      setSelectedStatus(null);
      setActionVisibility({}); // Reset all action visibility
    } else {
      setSelectedChargerId(chargerData.id);
      setSelectedStatus(chargerData.status);
    }
  };

  const handleActionClick = (action) => {
    setActionVisibility((prev) => ({
      ...prev,
      [action]: !prev[action],
    }));
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ m: 2 }}>
        Charger Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, md: 12 }}>
          <Card sx={{ p: 4, boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Grid container alignItems="center">
                {/* Left side: Data */}
                <Grid item size={{ xs: 12, md: 8 }}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ display: "flex" }}
                  >
                    <Typography sx={{ fontWeight: "bold" ,marginRight:"5px"}}>
                      Charger Display ID:
                    </Typography>
                 {chargerData.id}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ display: "flex" }}
                  >
                    <Typography sx={{ fontWeight: "bold",marginRight:"5px" }}>
                      Project Name: 
                    </Typography>
                    {chargerData.project}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ display: "flex" }}
                  >
                    <Typography sx={{ fontWeight: "bold" ,marginRight:"5px"}}>
                      Status: 
                    </Typography>
                 {chargerData.status}
                  </Typography>
                </Grid>
                {/* Right side: Button */}
                <Grid
                  item
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <Button
                    onClick={handleButtonClick}
                    variant="contained"
                    sx={{ mt: 0, bgcolor: "#20c997" }}
                  >
                    {selectedChargerId
                      ? "Hide Charger Actions"
                      : "Show Charger Actions"}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>

            {selectedChargerId && (
              <Card
                sx={{
                  mt: 4,
                  boxShadow: 1,
                  borderRadius: 1,
                  bgcolor: "grey.100",
                }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "monospace", display: "flex" }}
                  >
                    <Typography sx={{ fontWeight: "bold", marginRight:"5px"}}>
                      Connector Status: 
                    </Typography>
                    {selectedStatus}
                  </Typography>
                </CardContent>
              </Card>
            )}

            {selectedChargerId && (
              <Card sx={{ mt: 4, boxShadow: 5, borderRadius: 1, p: 4 }}>
                <CardContent>
                  {actions.map((action) => (
                    <Grid
                      container
                      alignItems="center"
                      key={action}
                      sx={{ mt: 1 }}
                    >
                      <Grid item size={{ xs: 12, md: 6 }}>
                        <Typography
                          variant="body1"
                          sx={{ fontFamily: "monospace", cursor: "pointer" ,fontWeight:'bold'}}
                          onClick={() => handleActionClick(action)}
                        >
                          {action}
                        </Typography>
                      </Grid>
                      <Grid item size={{ xs: 12, md: 6 }}>
                        {actionVisibility[action] && (
                          <TextField
                            label={`Modify ${action}`}
                            variant="outlined"
                            fullWidth
                          />
                        )}
                      </Grid>
                    </Grid>
                  ))}
                </CardContent>
              </Card>
            )}
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Charger_Dashboard;
  