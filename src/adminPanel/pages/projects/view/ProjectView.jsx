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
import { StyledTableCell,StyledTableRow} from '../../../component/tableStyle';
import { useGetProjectsQuery } from '../../../../globalState/projects/projectsApis';
// ----------------------------------------------------------------------

function ProjectView() {

  const { data, isSuccess } = useGetProjectsQuery();
  const allProjectsData = isSuccess && data.data;

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" color="white">Projects</Typography>
        <Link to={"/admin/project/add"}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#34345a",
              boxShadow: 'none',
              "&:hover": { bgcolor: "#34345a" }
            }}
            startIcon={<Iconify icon="eva:plus-fill" />}>
            New Project
          </Button>
        </Link>
      </Stack>
      <Card sx={{ bgcolor: "#181837" }}>
        <ProjectTableToolbar />
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <ProjectTableHead allProjectsData = {allProjectsData} />
              <TableBody>
                {allProjectsData.length > 0 ? <ProjectTableRow allProjectsData = {allProjectsData} /> 
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
        {(allProjectsData.length > 0) && <TablePagination />}
      </Card>
    </Container>
  );
}
export default ProjectView;