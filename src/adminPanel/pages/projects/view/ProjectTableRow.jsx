import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import Label from '../../../component/lable/Lable';
import Iconify from '../../../component/Iconify';
import ModalBox from '../../../component/ModalBox';
import Action from '../../../component/Action';
import { useSoftDeleteProjectsMutation, useSoftRestoreProjectsMutation } from '../../../../globalState/projects/projectsApis';
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import { Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';

const role = JSON.parse(sessionStorage.getItem("role"))
function ProjectTableRow({ allProjectsData, currentpage }) {


    const { logInRole } = useSelector(state => state.role)


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const [softDeleteCluster] = useSoftDeleteProjectsMutation()
    const [restoreDeletedCluster] = useSoftRestoreProjectsMutation()

    function onSoftDelete(data) {
        let dataId = data.id
        softDeleteCluster({ id: dataId, softDeletedProjectsData: data })
    }

    function onRestoreData(id) {
        restoreDeletedCluster(id)
    }

    return (
        <>
            {allProjectsData.length > 0
                ?
                allProjectsData.map((data, i) => (
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.id}>
                        <StyledTableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            />
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : ((currentpage - 1) * 10 + (i + 1))}
                        </StyledTableCell>
                         {logInRole?.user?.role?.name === "Superadmin" && <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data?.cluster?.cluster_name}
                        </StyledTableCell>}
                   
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data.project_name}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? (<Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" />) : data.network_type }
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : data.project_location}
                        </StyledTableCell>
                        <StyledTableCell>
                            <Label color={data.deleted_at === null ? 'success' : 'error'} >{loading ? <Skeleton sx={{ bgcolor: data.deleted_at === null ? 'success' : 'error' }} animation="pulse" /> : (data.deleted_at === null ? 'Active' : 'Inactive')}</Label>
                        </StyledTableCell>
                        <StyledTableCell>
                            {loading ? <Skeleton sx={{ bgcolor: '#57b33e3d' }} animation="pulse" /> : <Action
                                data={data}
                                activeOrInactive={data.deleted_at}
                                pathToNavigate={"/admin/project/update"}
                                onSoftDelete={onSoftDelete}
                                onRestoreData={onRestoreData}
                            />}
                        </StyledTableCell>
                    </StyledTableRow>
                ))
                :
                <StyledTableRow>
                    <StyledTableCell align='center' colSpan={10}>Loading...</StyledTableCell>
                </StyledTableRow>
            }
        </>
    );
}

export default ProjectTableRow;