import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Action from '../../../component/Action';
import { useGetOrganizationQuery } from '../../../globalState/organization/organizationApis';

// ----------------------------------------------------------------------

function OrganizationTableRow() {

    const { data, isSuccess } = useGetOrganizationQuery()

    const allOrganizationData = isSuccess && data.data

    console.log(allOrganizationData)

    return (
        <>
            {allOrganizationData.length > 0
                &&
                allOrganizationData.map((data, i) => (
                    < TableRow hover tabIndex={-1} role="checkbox" key={data.ID}>
                        <TableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />
                        </TableCell>
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell>{data.address}</TableCell>
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