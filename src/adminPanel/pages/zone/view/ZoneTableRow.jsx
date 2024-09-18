import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Label from '../../../component/lable/Lable';
import Iconify from '../../../component/Iconify';
import ModalBox from '../../../component/ModalBox';
import Action from '../../../component/Action';
import { zoneData } from './zoneData';

// ----------------------------------------------------------------------

function ZoneTableRow() {

    return (
        <>
            {zoneData.length > 0
                &&
                zoneData.map((data) => (
                    < TableRow hover tabIndex={-1} role="checkbox" key={data.ID}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />
                        </TableCell>
                        <TableCell>{data.organizationID}</TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.location}</TableCell>
                        <TableCell>
                            <Label color={data.Status === 'Inactive' ? 'error' : 'success'} >{data.Status}</Label>
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

export default ZoneTableRow;