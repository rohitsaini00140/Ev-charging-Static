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
import ProductsTableHead from './ProductsTableHead';
import ProductsTableToolbar from './ProductsTableToolbar';
import { Link } from 'react-router-dom';
import ProductsTableRow from './ProductsTableRow';
import Pagination from '../../../component/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { useShowFilteredProductQuery } from '../../../globalState/product/productApis';
import { setProductListPageNo, setProductListRowNo } from '../../../globalState/product/productSlices';

// ----------------------------------------------------------------------

function ProductView() {

  const { selectedProductId, pageNo, rowNo, searchKeywords, order } = useSelector(state => state.product);

  const { data, isSuccess } = useShowFilteredProductQuery({ pageNo, rowNo, searchKeywords, order })

  let allProducts = isSuccess && data.data

  const dispatch = useDispatch()

  const { totalCount } = allProducts;

  const handleChangePage = (event, newPage) => {
    sessionStorage.setItem('productListPageNo', JSON.stringify(newPage + 1));
    dispatch(setProductListPageNo(newPage + 1));
  };

  function handleChangeRowsPerPage(rowNo) {
    sessionStorage.setItem('productListRowNo', JSON.stringify(rowNo));
    dispatch(setProductListRowNo(rowNo));
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Products</Typography>
        <Link to={"/products/add"}>
          <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Products
          </Button>
        </Link>
      </Stack>
      <Card>
        <ProductsTableToolbar />
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <ProductsTableHead />
              <TableBody>
                <ProductsTableRow />
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
        {(!(selectedProductId.length > 0) && (allProducts && allProducts.items.length > 0)) && <Pagination
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

export default ProductView;