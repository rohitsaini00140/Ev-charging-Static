import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Action from '../../../component/Action';
import Label from "../../../component/lable/Lable"
import { useRestoreDeletedOrganizationMutation, useSoftDeleteOrganizationMutation } from '../../../globalState/organization/organizationApis';

// ----------------------------------------------------------------------

function OrganizationTableRow({ allOrganizationData }) {

    const [softDeleteOrganization] = useSoftDeleteOrganizationMutation()
    const [restoreDeletedOrganization] = useRestoreDeletedOrganizationMutation()

    function onSoftDelete(data) {
        let dataId = data.id
        softDeleteOrganization({ id: dataId, softDeletedOrganizationData: data })
    }

    function onRestoreData(id) {
        console.log(id)
        restoreDeletedOrganization(id)
    }

    return (
        <>
            {allOrganizationData.length > 0
                &&
                allOrganizationData.map((data, i) => (
                    < TableRow hover tabIndex={-1} role="checkbox" key={data.id}>
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
                            <Label color={data.deleted_at === null ? 'success' : 'error'} >{data.deleted_at === null ? 'Active' : 'Inactive'}</Label>
                        </TableCell>
                        <TableCell>{new Date(data.created_at).toLocaleString()}</TableCell>
                        <TableCell>
                            <Action
                                data={data}
                                activeOrInactive={data.deleted_at}
                                pathToNavigate={"/admin/organization/update"}
                                onSoftDelete={onSoftDelete}
                                onRestoreData={onRestoreData}
                            />
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    );
}

export default OrganizationTableRow;