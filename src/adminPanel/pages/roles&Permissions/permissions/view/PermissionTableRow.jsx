import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { StyledTableCell, StyledTableRow } from '../../../../component/tableStyle';
import Label from '../../../../component/lable/Lable';
import Action from '../../../../component/Action';
import { permissionData } from './permissionData';

// ----------------------------------------------------------------------

function PermissionTableRow() {

    return (
        <>
            {permissionData.length > 0
                &&
                permissionData.map((data) => (
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.ID}>
                        <StyledTableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />
                        </StyledTableCell>
                        <StyledTableCell>{data.Name}</StyledTableCell>
                        <StyledTableCell>{data.description}</StyledTableCell>
                        <StyledTableCell>
                            <Label color={data.Status === 'Inactive' ? 'error' : 'success'} >{data.Status}</Label>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Action data={data}
                            // pathToNavigate={"/category/update"} 
                            />
                        </StyledTableCell>
                    </StyledTableRow>
                ))
            }
        </>
    );
}

export default PermissionTableRow;