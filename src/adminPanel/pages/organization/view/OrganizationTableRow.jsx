import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
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
        restoreDeletedOrganization(id)
    }


    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.body}`]: {
            backgroundColor: "#181837",
            color: "white",
            fontSize: 14,
            borderColor: "#34345a"
        },
    }));

    const StyledTableRow = styled(TableRow)(() => ({
        backgroundColor: "#181837",
        borderColor: "#34345a",
        '&:last-child td, &:last-child th': {
            border: 0,
            borderColor: "#34345a",
        },
    }));



    return (
        <>
            {allOrganizationData.length > 0
                ?
                allOrganizationData.map((data, i) => (
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.id}>
                        <StyledTableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />
                        </StyledTableCell>
                        <StyledTableCell color={"white"} >{i + 1}</StyledTableCell>
                        <StyledTableCell color={"#222245"}>{data.name}</StyledTableCell>
                        <StyledTableCell color={"#222245"}>{data.email}</StyledTableCell>
                        <StyledTableCell color={"#222245"}>{data.address}</StyledTableCell>
                        <StyledTableCell>
                            <Label color={data.deleted_at === null ? 'success' : 'error'} >{data.deleted_at === null ? 'Active' : 'Inactive'}</Label>
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>{new Date(data.created_at).toLocaleString()}</StyledTableCell>
                        <StyledTableCell>
                            <Action
                                data={data}
                                activeOrInactive={data.deleted_at}
                                pathToNavigate={"/admin/organization/update"}
                                onSoftDelete={onSoftDelete}
                                onRestoreData={onRestoreData}
                            />
                        </StyledTableCell>
                    </StyledTableRow>
                ))
                :
                <StyledTableRow>
                    <StyledTableCell align='center'>Loading...</StyledTableCell>
                </StyledTableRow>
            }
        </>
    );
}

export default OrganizationTableRow;