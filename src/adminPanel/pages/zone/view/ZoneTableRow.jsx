import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Action from '../../../component/Action';
import Label from "../../../component/lable/Lable"

// ----------------------------------------------------------------------

function ZoneTableRow({ allZoneData }) {

    return (
        <>
            {allZoneData.length > 0
                &&
                allZoneData.map((data, i) => (
                    < TableRow hover tabIndex={-1} role="checkbox" key={data.ID}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />
                        </TableCell>
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>{data.organization ? data.organization.name : "Not Selected"}</TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.location}</TableCell>
                        <TableCell>
                            <Label color={data.deleted_at ? 'error' : 'success'} >{data.deleted_at === null ? 'Inactive' : 'Active'}</Label>
                        </TableCell>
                        <TableCell>{new Date(data.created_at).toLocaleString()}</TableCell>
                        <TableCell>
                            <Action
                                activeOrInactive={data.deleted_at}
                                data={data}
                                pathToNavigate={"/admin/zone/update"}
                            />
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}

export default ZoneTableRow;