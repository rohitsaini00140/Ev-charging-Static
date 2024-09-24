import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Action from '../../../component/Action';
import Label from "../../../component/lable/Lable"
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import { useRestoreDeletedOrganizationMutation, useSoftDeleteOrganizationMutation } from '../../../globalState/organization/organizationApis';
import { Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

function OrganizationTableRow({ allOrganizationData }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);


    const [softDeleteOrganization] = useSoftDeleteOrganizationMutation()
    const [restoreDeletedOrganization] = useRestoreDeletedOrganizationMutation()

    function onSoftDelete(data) {
        let dataId = data.id
        softDeleteOrganization({ id: dataId, softDeletedOrganizationData: data })
    }

    function onRestoreData(id) {
        restoreDeletedOrganization(id)
    }


    return (
        <>
            {allOrganizationData.length > 0
                ?
                allOrganizationData.map((data, i) => (
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.id}>
                        <StyledTableCell padding="checkbox">
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />}
                        </StyledTableCell>
                        <StyledTableCell color={"white"} >
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : i + 1}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.name}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.email}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.address}
                        </StyledTableCell>
                        <StyledTableCell>
                            <Label color={data.deleted_at === null ? 'success' : 'error'} >{loading ? <Skeleton sx={{ bgcolor: data.deleted_at === null ? 'success' : 'error' }} animation="pulse" /> : (data.deleted_at === null ? 'Active' : 'Inactive')}</Label>
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : (new Date(data.created_at).toLocaleString())}</StyledTableCell>
                        <StyledTableCell>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : <Action
                                data={data}
                                activeOrInactive={data.deleted_at}
                                pathToNavigate={"/admin/organization/update"}
                                onSoftDelete={onSoftDelete}
                                onRestoreData={onRestoreData}
                            />}
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