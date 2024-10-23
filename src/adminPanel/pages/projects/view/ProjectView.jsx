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
import { Link } from 'react-router-dom';
import TablePagination from '../../../component/TablePagination';
import ProjectTableToolbar from './ProjectTableToolbar';
import ProjectTableHead from './ProjectTableHead';
import ProjectTableRow from './ProjectTableRow';
import { useDispatch, useSelector } from "react-redux";
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import { useGetFilteredProjectsQuery } from '../../../../globalState/projects/projectsApis';
import { setProjectListPageNo } from '../../../../globalState/projects/projectsSlices';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Alertbar from '../../../component/Alertbar';


function ProjectView() {

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.message) {
      setSnackbar({
        open: true,
        message: location.state.message,
        severity: location.state.severity
      });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate]);


  const dispatch = useDispatch()

  const { pageNo, searchProjectKeywords, projectStatus } = useSelector(state => state.project);

  const { clusterName } = useSelector(state => state.cluster)

  const { userName } = useSelector(state => state.user)

  const { data: filteredData, isSuccess: filteredDataSuccess, isLoading } = useGetFilteredProjectsQuery({ page: pageNo, projectName: searchProjectKeywords, clusterName, userName, status: projectStatus });

  const allProjectsData = filteredDataSuccess && filteredData?.data;

  const paginationData = filteredDataSuccess && filteredData;

  const { last_page } = paginationData

  const handlePageChange = (event, value) => {
    dispatch(setProjectListPageNo(value));
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
        >
          <Typography variant="h4" color="white">Projects</Typography>
          <Link to={"/admin/project/add"}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#20c997",
                boxShadow: 'none',
                padding: '10px 10px',
                // "&:hover": { bgcolor: "#34345a" }
              }}
              startIcon={<Iconify icon="eva:plus-fill" />}>
              New Project
            </Button>
          </Link>
        </Stack>
        <Card sx={{ bgcolor: "#3e403d0f", boxShadow: '0px 4px 12px rgba(87, 179, 62, 0.2)' }}>
          <ProjectTableToolbar />
          {isLoading ? (
            <Stack alignItems="center" justifyContent="center" sx={{ minHeight: 300, padding: 4 }}>
              <Typography color="white" sx={{ mt: 2 }}>Loading...</Typography>
            </Stack>
          ) : (<Scrollbar>
            <TableContainer sx={{ overflow: 'unset' }}>
              <Table sx={{ minWidth: 800 }}>
                <ProjectTableHead allProjectsData={allProjectsData} />
                <TableBody>
                  {allProjectsData.length > 0 ?
                    <ProjectTableRow
                      currentpage={pageNo}
                      allProjectsData={allProjectsData}
                    />
                    : (
                      <StyledTableRow>
                        <StyledTableCell colSpan={10} align="center" sx={{ border: "1px solid red", padding: "2rem" }}>
                          <Typography color="white">No Data Found</Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    )}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
          )}
          {(allProjectsData.length > 0) && <TablePagination
            count={last_page}
            onPageChange={handlePageChange}
            page={pageNo}
          />}
        </Card>
      </Container>
      <Alertbar
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        severity={snackbar.severity}
        message={snackbar.message}
        position={{ vertical: 'top', horizontal: 'center' }}
        sx={{ mt: "5rem" }}
      />
    </>
  );
}

export default ProjectView;