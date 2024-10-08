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
import { useGetClustersQuery } from '../../../../globalState/cluster/clusterApis';
import TablePagination from '../../../component/TablePagination';
import { useDispatch, useSelector } from "react-redux";
import { setClusterListPageNo } from "../../../../globalState/cluster/clusterSlices";
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';


// ----------------------------------------------------------------------
function ClustersView() {
    const dispatch = useDispatch()

    const { pageNo } = useSelector(state => state.cluster);
    const { data, isSuccess } = useGetClustersQuery({ page: pageNo });
    const allClusterData = isSuccess && data.data;
    const paginationData = isSuccess && data;
    const { last_page } = paginationData;

    
    const handlePageChange = (event, value) => {
        sessionStorage.setItem('clusterListPageNo', JSON.stringify(value));
        dispatch(setClusterListPageNo(value));
    };
    return (
        <Container>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" color="white">Clusters</Typography>
                <Link to={"/admin/cluster/add"}>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#34345a",
                            boxShadow: 'none',
                            "&:hover": { bgcolor: "#34345a" }
                        }}
                        color="inherit"
                        startIcon={<Iconify icon="eva:plus-fill" />}>
                        New Cluster
                    </Button>
                </Link>
            </Stack>
            <Card sx={{ bgcolor: "#181837" }}>
                <ClustersTableToolbar allClusterData={allClusterData} />
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
                                    <StyledTableRow>
                                        <StyledTableCell colSpan={10} align="center" sx={{ border: "1px solid red", padding: "2rem" }}>
                                            <Typography color="white">Empty</Typography>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Scrollbar>
                {allClusterData.length > 0 && <TablePagination
                    count={last_page}
                    page={pageNo}
                    onPageChange={handlePageChange}
                />}
            </Card>
        </Container>
    );
}

export default ClustersView;