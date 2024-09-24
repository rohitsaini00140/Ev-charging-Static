import Checkbox from '@mui/material/Checkbox';
import Label from '../../../../component/lable/Lable';
import { StyledTableCell, StyledTableRow } from '../../../../component/tableStyle';
import Action from '../../../../component/Action';
import { roleData } from './roleData';

// ----------------------------------------------------------------------

function RoleTableRow() {

    return (
        <>
            {roleData.length > 0
                &&
                roleData.map((data) => (
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

export default RoleTableRow;