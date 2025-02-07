import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Scrollbar from "../../../component/scrollbar/Scrollbar";
import TablePagination from "../../../component/TablePagination";
import { StyledTableCell, StyledTableRow } from "../../../component/tableStyle";
import { useDispatch} from "react-redux";

import ChargerdashboardTableHead from "./ChargerdashboardTableHead";
import ChargerTableRow from "./ChargerTableRow";
import { Grid } from "@mui/system";
import { useGetChargersQuery } from "../../../../globalState/charger/chargerApi";

function ChargerLogs() {


   const { data, error, isLoading } = useGetChargersQuery();
  
    console.log("API Responsetable ma shhow ho ga : ", data);

    const postData = null


  return (
    <>
      <Container>
        <Stack>
          <Grid
            container
            sx={{
              margin: "20px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h4" color="black">
                Charger Activity Logs
              </Typography>
            </Grid>
          </Grid>
        </Stack>

        <Card
          sx={{
            bgcolor: "#ffff",
            borderRadius: "2px",
          }}
        >
          
            <Scrollbar>
              <TableContainer sx={{ overflow: "unset" }}>
                <Table sx={{ minWidth: 800 }}>
                  <ChargerdashboardTableHead  />
                  <TableBody>
                    {postData?.length > 0 ? (
                      <ChargerTableRow postData={postData} />
                    ) : (
                      <StyledTableRow>
                        <StyledTableCell
                          colSpan={10}
                          align="center"
                          sx={{ border: "1px solid red", padding: "2rem" }}
                        >
                          <Typography color="Black">No Data Found</Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
        {/* ) } */}
          {postData?.data?.length > 0 && (
            <TablePagination
              count={Math.floor(postData?.total / 10)}
              // page={page}
              // onPageChange={handlePageChange}
              rowsPerPage={10}
            />
          )}
        </Card>
      </Container>
    </>
  );
}

export default ChargerLogs;
