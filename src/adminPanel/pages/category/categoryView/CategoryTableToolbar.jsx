import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Iconify from '../../../component/Iconify';
import { useSelector } from 'react-redux';
import MenuList from '../../../component/MenuList';
import SearchInput from '../../../component/SearchInput';
import { useDispatch } from 'react-redux';
import ExcelExport from '../../../component/ExcelExport';
import { fieldsToDownload, fieldMapping, filter } from './headLabel';
import { Stack } from '@mui/material';
import PdfExport from '../../../component/PdfExport';
import { setOrderType, setCategoryListPageNo, setSearchKeywords } from '../../../globalState/category/categorySlices';
import { useShowFilteredCategoryQuery, useDeleteMultipleCategoryMutation } from '../../../globalState/category/categoryApis';

// ----------------------------------------------------------------------

function CategoryTableToolbar() {

    const dispatch = useDispatch()

    const { selectedCategoryId, pageNo, rowNo, order, searchKeywords } = useSelector(state => state.category);

    const [deleteMultipleCategory] = useDeleteMultipleCategoryMutation()

    const { isSuccess, data } = useShowFilteredCategoryQuery({ pageNo, rowNo, order, searchKeywords })

    const allCategories = isSuccess && data.data.items

    function handleOnClick(allCategoryId) {
        deleteMultipleCategory(allCategoryId)
    }

    function handleSearchKeywords(keyWords) {
        sessionStorage.setItem('searchKeyWords', JSON.stringify(keyWords));
        dispatch(setSearchKeywords(keyWords))
        sessionStorage.removeItem('categoryListPageNo')
        dispatch(setCategoryListPageNo(1));
    }

    function handleOrderChange(orderType) {
        sessionStorage.setItem('orderType', JSON.stringify(orderType));
        dispatch(setOrderType(orderType))
        sessionStorage.removeItem('categoryListPageNo')
        dispatch(setCategoryListPageNo(1));
    }

    return (
        <Toolbar
            sx={{
                height: 96,
                display: 'flex',
                justifyContent: 'space-between',
                p: (theme) => theme.spacing(0, 1, 0, 3),
                ...(selectedCategoryId.length > 0 && {
                    color: 'primary.main',
                    bgcolor: 'primary.lighter',
                }),
            }}
        >
            {selectedCategoryId.length > 0 ? (
                <Typography component="div" variant="subtitle1">
                    {selectedCategoryId.length} selected
                </Typography>
            ) : (
                <SearchInput
                    placeholder="Search category..."
                    onChange={(e) => handleSearchKeywords(e.target.value)}
                    value={searchKeywords}
                />
            )}
            {selectedCategoryId.length > 0 ? (
                <Tooltip title="Delete">
                    <IconButton onClick={() => handleOnClick(selectedCategoryId)}>
                        <Iconify icon="eva:trash-2-fill" />
                    </IconButton>
                </Tooltip>
            ) : (
                <Stack direction={'row'} alignItems={"center"} spacing={2}>
                    <PdfExport
                        data={allCategories.length > 0 && allCategories}
                        fileName="Categories.pdf"
                        fields={fieldsToDownload}
                        fieldMapping={fieldMapping}
                    />
                    <ExcelExport
                        data={allCategories.length > 0 && allCategories}
                        fileName="Categories"
                        fields={fieldsToDownload}
                        fieldMapping={fieldMapping}
                    />
                    <MenuList heading={<Iconify icon="ic:round-filter-list" />} values={filter} onChange={handleOrderChange} />
                </Stack>
            )}
        </Toolbar>
    );
}

export default CategoryTableToolbar;