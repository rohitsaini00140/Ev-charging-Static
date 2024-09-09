import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Label from '../../../component/lable/Lable';
import Iconify from '../../../component/Iconify';
import ModalBox from '../../../component/ModalBox';
import { useDeleteProductMutation, useShowFilteredProductQuery } from '../../../globalState/product/productApis';
import Action from '../../../component/Action';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProductId, clearSelectedProductId } from '../../../globalState/product/productSlices';

// ----------------------------------------------------------------------

function ProductsTableRow() {

  const { pageNo, rowNo, searchKeywords, order, selectedProductId } = useSelector(state => state.product);

  const { data, isSuccess } = useShowFilteredProductQuery({ pageNo, rowNo, searchKeywords, order })

  const [deleteProduct] = useDeleteProductMutation()

  const allProducts = isSuccess && data.data.items

  const dispatch = useDispatch()

  function onHandleChange(e, id) {
    if (e) {
      dispatch(setSelectedProductId(id));
    } else {
      dispatch(clearSelectedProductId(id));
    }
  }

  const handleDelete = (ProductId) => {
    console.log(ProductId)
    deleteProduct(ProductId)
  }

  return (
    <>
      {allProducts.length > 0
        &&
        allProducts.map((product) => (
          < TableRow hover tabIndex={-1} role="checkbox" key={product._id}
          >
            <TableCell padding="checkbox">
              <Checkbox disableFocusRipple
                onChange={(e) => onHandleChange(e.target.checked, product._id)}
                checked={selectedProductId.includes(product._id)}
              />
            </TableCell>
            <TableCell>
              <ModalBox
                name={<Iconify icon="mdi:eye" sx={{ mr: 2, color: "#1877f2" }} />}
                value={product.productImage}
                heading={"Images"}
              />
            </TableCell>
            <TableCell>{product.productTitle}</TableCell>
            <TableCell>
              <Label color={(product.productStatus === 'Private' && 'error') || 'success'}>{product.productStatus}</Label>
            </TableCell>
            <TableCell>{product.productBrand}</TableCell>
            <TableCell align="center">{product.productPurchasedAmount}</TableCell>
            <TableCell align="center">{product.productSellingAmount}</TableCell>
            <TableCell align="center">{product.productOfferedAmount}</TableCell>
            <TableCell>{new Date(product.createdAt).toLocaleString()}</TableCell>
            {!(selectedProductId.length > 0) && <TableCell>
              <Action
                data={product}
                pathToNavigate={"/products/update"}
                onDelete={handleDelete}
              />
            </TableCell>}
          </TableRow>
        ))
      }
    </>
  );
}

export default ProductsTableRow;