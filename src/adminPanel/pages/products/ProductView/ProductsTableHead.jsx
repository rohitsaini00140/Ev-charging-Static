import { useState, useEffect } from 'react';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import { headLabel } from './headLabel';
import { useDispatch, useSelector } from 'react-redux';
import { useShowFilteredProductQuery } from '../../../globalState/product/productApis';
import { setSelectedProductId, clearSelectedProductId } from '../../../globalState/product/productSlices';

// ----------------------------------------------------------------------

function ProductsTableHead() {

    const dispatch = useDispatch()

    const { selectedProductId, pageNo, rowNo, searchKeywords, order } = useSelector(state => state.product);

    const { data, isSuccess } = useShowFilteredProductQuery({ pageNo, rowNo, searchKeywords, order })

    const allProducts = isSuccess && data.data.items

    const [selectAll, setSelectAll] = useState(false);

    function onHandleSelectAll(e) {
        const isChecked = e.target.checked;
        setSelectAll(isChecked);
        if (isChecked) {
            const allIds = allProducts.map(product => product._id);
            allIds.forEach(id => dispatch(setSelectedProductId(id)));
        } else {
            allProducts.forEach(product => dispatch(clearSelectedProductId(product._id)));
        }
    }

    useEffect(() => {
        setSelectAll(selectedProductId.length === allProducts.length);
    }, [selectedProductId, allProducts]);

    return (
        <TableHead>
            <TableRow>
                {
                    allProducts.length > 0 && <TableCell padding="checkbox">
                        <Checkbox
                            onChange={onHandleSelectAll}
                            checked={selectAll}
                        />
                    </TableCell>
                }

                {!(selectedProductId.length > 0) ? headLabel.map((headCell) => (
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

export default ProductsTableHead;