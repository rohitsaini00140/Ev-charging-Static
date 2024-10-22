import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Label from '../../../component/lable/Lable';
import Iconify from '../../../component/Iconify';
import ModalBox from '../../../component/ModalBox';
import Action from '../../../component/Action';
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import { useEffect, useState } from "react"
import { Skeleton } from '@mui/material';
import { useRestoreDeletedUserMutation, useSoftDeleteUserMutation } from '../../../../globalState/user/userApis';


function UserTableRow({ allUserData, currentpage }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const [softDeleteUser] = useSoftDeleteUserMutation()
    const [restoreDeletedUser] = useRestoreDeletedUserMutation()

    function onSoftDelete(data) {
        let dataId = data.id
        softDeleteUser({ id: dataId, softDeletedProjectsData: data })
    }

    function onRestoreData(id) {
        restoreDeletedUser(id)
    }

    return (
        <>
            {allUserData.length > 0
                &&
                allUserData.map((data) => (
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.id}>
                        <StyledTableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}> {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data.name}</StyledTableCell>
                        <StyledTableCell color={"#222245"}> {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data.email}</StyledTableCell>
                        <StyledTableCell color={"#222245"}> {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data.phone}</StyledTableCell>
                        <StyledTableCell color={"#222245"}> {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data.role?.role_name}</StyledTableCell>
                        <StyledTableCell>
                            <Label color={data.deleted_at === null ? 'success' : 'error'} >{loading ? <Skeleton sx={{ bgcolor: data.deleted_at === null ? 'success' : 'error' }} animation="pulse" /> : (data.deleted_at === null ? 'Active' : 'Inactive')}</Label>
                        </StyledTableCell>
                        <StyledTableCell>
                            {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : <Action
                                data={data}
                                activeOrInactive={data.deleted_at}
                                pathToNavigate={"/admin/user/update"}
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

export default UserTableRow;