import { useState, useEffect } from 'react';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import { headLabel } from "./headLabel"
import { useDispatch, useSelector } from 'react-redux';
import { useShowFilteredCategoryQuery } from '../../../globalState/category/categoryApis';
import { setSelectedCategoryId, clearSelectedCategoryId } from '../../../globalState/category/categorySlices';

// ----------------------------------------------------------------------

function CategoryTableHead() {

    const dispatch = useDispatch()

    const { selectedCategoryId, pageNo, rowNo, searchKeywords, order } = useSelector(state => state.category);

    const { data, isSuccess } = useShowFilteredCategoryQuery({ pageNo, rowNo, searchKeywords, order })

    const allCategories = isSuccess && data.data.items

    const [selectAll, setSelectAll] = useState(false);

    function onHandleSelectAll(e) {
        const isChecked = e.target.checked;
        setSelectAll(isChecked);
        if (isChecked) {
            const allIds = allCategories.map(category => category._id);
            allIds.forEach(id => dispatch(setSelectedCategoryId(id)));
        } else {
            allCategories.forEach(category => dispatch(clearSelectedCategoryId(category._id)));
        }
    }

    useEffect(() => {
        setSelectAll(selectedCategoryId.length === allCategories.length);
    }, [selectedCategoryId, allCategories]);

    return (
        <TableHead>
            <TableRow>
                {
                    allCategories.length > 0 && <TableCell padding="checkbox">
                        <Checkbox
                            onChange={onHandleSelectAll}
                            checked={selectAll}
                        />
                    </TableCell>
                }

                {!(selectedCategoryId.length > 0) ? headLabel.map((headCell) => (
                    <TableCell
                        sx={{ width: headCell.width, minWidth: headCell.minWidth }}
                    >
                        <TableSortLabel hideSortIcon>
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))
                    :
                    headLabel.slice(0, -1).map((headCell) => (
                        <TableCell
                            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
                        >
                            <TableSortLabel hideSortIcon>
                                {headCell.label}
                            </TableSortLabel>
                        </TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    );
}

export default CategoryTableHead;