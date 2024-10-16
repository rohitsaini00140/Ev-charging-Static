import Checkbox from '@mui/material/Checkbox';
import Label from '../../../../component/lable/Lable';
import { StyledTableCell, StyledTableRow } from '../../../../component/tableStyle';
import Action from '../../../../component/Action';
import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

function RoleTableRow({ allRoleData }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {allRoleData.length > 0
                &&
                allRoleData.map((data, i) => (
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.id}>
                        <StyledTableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />
                        </StyledTableCell>
                        <StyledTableCell> {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : i + 1}</StyledTableCell>
                        <StyledTableCell> {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.name}</StyledTableCell>
                        {/* <StyledTableCell>
                            <Label color={data.deleted_at === null ? 'success' : 'error'} >{loading ? <Skeleton sx={{ bgcolor: data.deleted_at === null ? 'success' : 'error' }} animation="pulse" /> : (data.deleted_at === null ? 'Active' : 'Inactive')}</Label>
                        </StyledTableCell> */}
                        {/* <StyledTableCell>{data.createdAt}</StyledTableCell> */}
                        <StyledTableCell>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : <Action data={data}
                            // pathToNavigate={"/category/update"} 
                            />}
                        </StyledTableCell>
                    </StyledTableRow>
                ))
            }
        </>
    );
}

export default RoleTableRow;