import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Scrollbar from "../../../component/scrollbar/Scrollbar"
import { permissionsToRoleData, allRoles, allPermissions } from './permissionsToRoleData';
import { Grid } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';

// ----------------------------------------------------------------------

function PermissionToRole() {

    return (
        <Container>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" color="white">Permissions to role</Typography>
            </Stack>
            <Card sx={{ p: "2rem", bgcolor: "#181837" }}>
                <Scrollbar>
                    {
                        allRoles.map((role, i) => {
                            return <Grid container
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: "2rem"
                                }}
                                size={12}
                            >
                                <Grid size={{ sm: 2, xs: 12 }}>
                                    <Typography key={i} variant='h6' color="white">{role}:</Typography>
                                </Grid>
                                <Grid sx={{ display: "flex", flexDirection: "row" }} size={{ sm: 10, xs: 12 }}>
                                    {
                                        allPermissions.map((permission, i) => {
                                            return <Stack sx={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                <Checkbox />
                                                <Typography key={i} color="white">{permission}</Typography>
                                            </Stack>
                                        })
                                    }
                                </Grid>
                            </Grid>
                        })
                    }
                </Scrollbar>
            </Card>
        </Container>
    );
}

export default PermissionToRole;