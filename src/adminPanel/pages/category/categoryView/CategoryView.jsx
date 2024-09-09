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
import CategoryTableHead from './CategoryTableHead';
import CategoryTableToolbar from './CategoryTableToolbar';
import { Link } from 'react-router-dom';
import CategoryTableRow from './CategoryTableRow';
import Pagination from '../../../component/Pagination';
import { useShowFilteredCategoryQuery } from '../../../globalState/category/categoryApis';
import { setCategoryListPageNo, setCategoryListRowNo } from '../../../globalState/category/categorySlices';
import { useSelector, useDispatch } from 'react-redux';

// ----------------------------------------------------------------------

function CategoryView() {

  const { selectedCategoryId, pageNo, rowNo, searchKeywords, order } = useSelector(state => state.category);

  const { data, isSuccess } = useShowFilteredCategoryQuery({ pageNo, rowNo, searchKeywords, order })

  let allCategories = isSuccess && data.data

  const dispatch = useDispatch()

  const { totalCount } = allCategories;

  const handleChangePage = (event, newPage) => {
    sessionStorage.setItem('categoryListPageNo', JSON.stringify(newPage + 1));
    dispatch(setCategoryListPageNo(newPage + 1));
  };

  function handleChangeRowsPerPage(rowNo) {
    sessionStorage.setItem('categoryListRowNo', JSON.stringify(rowNo));
    dispatch(setCategoryListRowNo(rowNo));
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Categories</Typography>
        <Link to={"/category/add"}>
          <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Category
          </Button>
        </Link>
      </Stack>
      <Card>
        <CategoryTableToolbar />
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <CategoryTableHead />
              <TableBody>
                <CategoryTableRow />
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
        {(!(selectedCategoryId.length > 0) && (allCategories && allCategories.items.length > 0)) && <Pagination
          pageChange={handleChangePage}
          rowChange={handleChangeRowsPerPage}
          totalCount={totalCount}
          pageNo={pageNo}
          rowNo={rowNo}
        />}
      </Card>
    </Container>
  );
}

export default CategoryView;