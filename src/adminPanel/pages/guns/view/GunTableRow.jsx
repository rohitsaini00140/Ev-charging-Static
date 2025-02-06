import Checkbox from '@mui/material/Checkbox';


import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
// import { useRestoreDeletedRoleMutation, useSoftDeleteRoleMutation } from '../../../../../globalState/roles/rolesApi';
import Label from '../../../component/lable/Lable';
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import Action from '../../../component/Action';
import { useRestoreDeletedGunMutation, useSoftDeleteGunMutation } from '../../../../globalState/gunType/gunApi';

// ----------------------------------------------------------------------

function GunTableRow({ allRoleData }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const [softDeleteRole] = useSoftDeleteGunMutation()
    const [restoreDeletedRole] = useRestoreDeletedGunMutation()

    function onSoftDelete(data) {
        let dataId = data.id
        softDeleteRole({ id: dataId, softDeletedGunData: data })
    }
    function onRestoreData(id) {
        restoreDeletedRole(id)
    }
    return (
        <>
            {allRoleData.length > 0
                &&
                allRoleData.map((data, i) => (
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.id}>
                        {/* <StyledTableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            checked={selectedCategoryId.includes(data["ID"])}
                            />
                        </StyledTableCell> */}
                        <StyledTableCell> {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : i + 1}</StyledTableCell>
                        <StyledTableCell> {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data.name}</StyledTableCell>
                        <StyledTableCell> {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data.max_power}</StyledTableCell>
                        <StyledTableCell> {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data.voltage}</StyledTableCell>
                        <StyledTableCell> {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data.current_type}</StyledTableCell>
                        <StyledTableCell> {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data.decription ? data.decription : "No data available"  }</StyledTableCell>
                        <StyledTableCell>
                            <Label color={data.deleted_at === null ? 'success' : 'error'} >{loading ? <Skeleton sx={{ bgcolor: data.deleted_at === null ? 'success' : 'error' }} animation="pulse" /> : (data.deleted_at === null ? 'Active' : 'Inactive')}</Label>
                        </StyledTableCell>
                        <StyledTableCell>
                            {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : <Action
                                data={data}
                                activeOrInactive={data.deleted_at}
                                pathToNavigate={"/admin/guns/update"}
                                onSoftDelete={onSoftDelete}
                                onRestoreData={onRestoreData}
                            />}
                        </StyledTableCell>
                    </StyledTableRow>
                ))
            }
        </>
    );
}

export default GunTableRow;