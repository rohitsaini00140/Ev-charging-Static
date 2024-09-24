import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Label from '../../../component/lable/Lable';
import Iconify from '../../../component/Iconify';
import ModalBox from '../../../component/ModalBox';
import Action from '../../../component/Action';
import { userData } from './userData';
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';

// ----------------------------------------------------------------------

function UserTableRow() {

    return (
        <>
            {userData.length > 0
                &&
                userData.map((data) => (
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.ID}>
                        <StyledTableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />
                        </StyledTableCell>
                        <StyledTableCell>{data.Name}</StyledTableCell>
                        <StyledTableCell>{data.EmailId}</StyledTableCell>
                        <StyledTableCell>{data.MobileNo}</StyledTableCell>
                        <StyledTableCell>{data.Role}</StyledTableCell>
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

export default UserTableRow;