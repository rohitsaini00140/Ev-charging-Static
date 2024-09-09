import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Iconify from '../../../component/Iconify';
import { useSelector } from 'react-redux';
import { useDeleteMultipleProductMutation, useShowFilteredProductQuery } from '../../../globalState/product/productApis';
import MenuList from '../../../component/MenuList';
import SearchInput from '../../../component/SearchInput';
import { useDispatch } from 'react-redux';
import { setOrderType, setProductListPageNo, setSearchKeywords } from '../../../globalState/product/productSlices';
import ExcelExport from '../../../component/ExcelExport';
import { fieldsToDownload, fieldMapping, filter } from './headLabel';
import { Stack } from '@mui/material';
import PdfExport from '../../../component/PdfExport';

// ----------------------------------------------------------------------

function ProductsTableToolbar() {

    const dispatch = useDispatch()

    const { selectedProductId, pageNo, rowNo, order, searchKeywords } = useSelector(state => state.product);

    const [deleteMultipleProduct] = useDeleteMultipleProductMutation()

    const { isSuccess, data } = useShowFilteredProductQuery({ pageNo, rowNo, order, searchKeywords })

    const allProducts = isSuccess && data.data.items

    function handleOnClick(allProductId) {
        deleteMultipleProduct(allProductId)
    }

    function handleSearchKeywords(keyWords) {
        sessionStorage.setItem('searchKeyWords', JSON.stringify(keyWords));
        dispatch(setSearchKeywords(keyWords))
        sessionStorage.removeItem('productListPageNo')
        dispatch(setProductListPageNo(1));
    }

    function handleOrderChange(orderType) {
        sessionStorage.setItem('orderType', JSON.stringify(orderType));
        dispatch(setOrderType(orderType))
        sessionStorage.removeItem('productListPageNo')
        dispatch(setProductListPageNo(1));
    }

    return (
        <Toolbar
            sx={{
                height: 96,
                display: 'flex',
                justifyContent: 'space-between',
                p: (theme) => theme.spacing(0, 1, 0, 3),
                ...(selectedProductId.length > 0 && {
                    color: 'primary.main',
                    bgcolor: 'primary.lighter',
                }),
            }}
        >
            {selectedProductId.length > 0 ? (
                <Typography component="div" variant="subtitle1">
                    {selectedProductId.length} selected
                </Typography>
            ) : (
                <SearchInput
                    placeholder="Search product..."
                    onChange={(e) => handleSearchKeywords(e.target.value)}
                    value={searchKeywords}
                />
            )}
            {selectedProductId.length > 0 ? (
                <Tooltip title="Delete">
                    <IconButton onClick={() => handleOnClick(selectedProductId)}>
                        <Iconify icon="eva:trash-2-fill" />
                    </IconButton>
                </Tooltip>
            ) : (
                <Stack direction={'row'} alignItems={"center"} spacing={2}>
                    <PdfExport
                        data={allProducts.length > 0 && allProducts}
                        fileName="Products.pdf"
                        fields={fieldsToDownload}
                        fieldMapping={fieldMapping}
                    />
                    <ExcelExport
                        data={allProducts.length > 0 && allProducts}
                        fileName="Products"
                        fields={fieldsToDownload}
                        fieldMapping={fieldMapping}
                    />
                    <MenuList heading={<Iconify icon="ic:round-filter-list" />} values={filter} onChange={handleOrderChange} />
                </Stack>
            )}
        </Toolbar>
    );
}

export default ProductsTableToolbar;