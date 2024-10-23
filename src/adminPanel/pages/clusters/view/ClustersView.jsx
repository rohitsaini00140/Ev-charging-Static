import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Iconify from '../../../component/Iconify';
import Scrollbar from '../../../component/scrollbar/Scrollbar';
import ClustersTableHead from './ClustersTableHead';
import ClustersTableToolbar from './ClustersTableToolbar';
import { Link } from 'react-router-dom';
import ClustersTableRow from './ClustersTableRow';
import { useGetFilteredClusterQuery } from '../../../../globalState/cluster/clusterApis';
import TablePagination from '../../../component/TablePagination';
import { useDispatch, useSelector } from "react-redux";
import { setClusterListPageNo } from "../../../../globalState/cluster/clusterSlices";
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Alertbar from '../../../component/Alertbar';


function ClustersView() {

    const location = useLocation();
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    useEffect(() => {
        if (location.state && location.state.message) {
            setSnackbar({
                open: true,
                message: location.state.message,
                severity: location.state.severity
            });
        }
    }, [location.state]);


    const dispatch = useDispatch()

    const { pageNo, searchClusterKeywords, clusterStatus } = useSelector(state => state.cluster);

    const { countryName, stateName, cityName } = useSelector(state => state.address)

    const { data: filteredData, isSuccess: filteredDataSuccess, isLoading } = useGetFilteredClusterQuery({ page: pageNo, clusterName: searchClusterKeywords, countryName, stateName, cityName, status: clusterStatus });

    const allClusterData = filteredDataSuccess && filteredData?.data

    const paginationData = filteredDataSuccess && filteredData;

    const { last_page } = paginationData;

    const handlePageChange = (event, value) => {
        dispatch(setClusterListPageNo(value));
    };


    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar((prevState) => ({
            ...prevState,
            open: false
        }));
    };


    return (
        <>
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    m={3}
                    mt={"7rem"}
                >
                    <Typography variant="h4" color="white">Clusters</Typography>
                    <Link to={"/admin/cluster/add"}>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#20c997",
                                boxShadow: 'none',
                                padding: '12px 18px',
                                '&:hover': {
                                    bgcolor: "#20c997", // Maintain the same color on hover
                                },
                            }}

                            color="inherit"
                            startIcon={<Iconify icon="eva:plus-fill" />}>
                            New Cluster
                        </Button>
                    </Link>
                </Stack>
                <Card sx={{ bgcolor: "rgb(29, 40, 44)", boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)" }}>
                    <ClustersTableToolbar allClusterData={allClusterData} />
                    {isLoading ? (
                        <Stack alignItems="center" justifyContent="center" sx={{ minHeight: 300, padding: 4 }}>
                            <Typography color="white" sx={{ mt: 2 }}>Loading...</Typography>
                        </Stack>
                    ) : (
                        <Scrollbar>
                            <TableContainer sx={{ overflow: 'unset' }}>
                                <Table sx={{ minWidth: 800 }}>
                                    <ClustersTableHead allClusterData={allClusterData} />
                                    <TableBody>
                                        {allClusterData.length > 0 ?
                                            <ClustersTableRow
                                                allClusterData={allClusterData}
                                                currentPageNo={pageNo}
                                            />
                                            :
                                            (
                                                <StyledTableRow>
                                                    <StyledTableCell colSpan={10} align="center" sx={{ border: "1px solid red", padding: "2rem" }}>
                                                        <Typography color="white">No Data Found</Typography>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            )
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Scrollbar>
                    )}
                    {allClusterData.length > 0 && <TablePagination
                        count={last_page}
                        page={pageNo}
                        onPageChange={handlePageChange}
                    />}
                </Card>
            </Container>
            <Alertbar
                open={snackbar.open}
                onClose={handleCloseSnackbar}
                severity={snackbar.severity}
                message={snackbar.message}
                position={{ vertical: 'top', horizontal: 'right' }}
                sx={{ mt: "6rem" }}
            />
        </>
    );
}

export default ClustersView;