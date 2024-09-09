import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Label from '../../../component/lable/Lable';
import Iconify from '../../../component/Iconify';
import ModalBox from '../../../component/ModalBox';
import Action from '../../../component/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useShowFilteredCategoryQuery } from '../../../globalState/category/categoryApis';
import { setSelectedCategoryId, clearSelectedCategoryId } from '../../../globalState/category/categorySlices';

// ----------------------------------------------------------------------

function CategoryTableRow() {

    const { pageNo, rowNo, searchKeywords, order, selectedCategoryId } = useSelector(state => state.category);

    const { data, isSuccess } = useShowFilteredCategoryQuery({ pageNo, rowNo, searchKeywords, order })

    const allCategories = isSuccess && data.data.items

    const dispatch = useDispatch()

    function onHandleChange(e, id) {
        if (e) {
            dispatch(setSelectedCategoryId(id));
        } else {
            dispatch(clearSelectedCategoryId(id));
        }
    }

    return (
        <>
            {allCategories.length > 0
                &&
                allCategories.map((category) => (
                    < TableRow hover tabIndex={-1} role="checkbox" key={category._id}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                                onChange={(e) => onHandleChange(e.target.checked, category._id)}
                                checked={selectedCategoryId.includes(category._id)}
                            />
                        </TableCell>
                        <TableCell>
                            <ModalBox
                                name={<Iconify icon="mdi:eye" sx={{ mr: 2, color: "#1877f2" }} />}
                                value={category.categoryImage}
                                heading={"Images"}
                            />
                        </TableCell>
                        <TableCell>{category.categoryTitle}</TableCell>
                        <TableCell>
                            <Label color={(category.categoryStatus === 'Private' && 'error') || 'success'}>{category.categoryStatus}</Label>
                        </TableCell>
                        <TableCell>{new Date(category.createdAt).toLocaleString()}</TableCell>
                        {!(selectedCategoryId.length > 0) && <TableCell>
                            <Action data={category} pathToNavigate={"/category/update"} />
                        </TableCell>}
                    </TableRow>
                ))
            }
        </>
    );
}

export default CategoryTableRow;