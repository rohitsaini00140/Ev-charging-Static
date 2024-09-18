import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Label from '../../../component/lable/Lable';
import Action from '../../../component/Action';
import { organizationData } from './organizationData';

// ----------------------------------------------------------------------

function OrganizationTableRow() {

    return (
        <>
            {organizationData.length > 0
                &&
                organizationData.map((data) => (
                    < TableRow hover tabIndex={-1} role="checkbox" key={data.ID}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />
                        </TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell>{data.address}</TableCell>
                        <TableCell>
                            <Label color={data.status === 'Inactive' ? 'error' : 'success'} >{data.status}</Label>
                        </TableCell>
                        <TableCell>
                            <Action data={data}
                            // pathToNavigate={"/category/update"} 
                            />
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}

export default OrganizationTableRow;