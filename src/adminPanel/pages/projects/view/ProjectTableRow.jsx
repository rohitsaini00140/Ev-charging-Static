import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { useState,useEffect } from 'react';
import TableCell from '@mui/material/TableCell';
import Label from '../../../component/lable/Lable';
import Iconify from '../../../component/Iconify';
import ModalBox from '../../../component/ModalBox';
import Action from '../../../component/Action';
import { useSoftDeleteProjectsMutation,useSoftRestoreProjectsMutation } from '../../../../globalState/projects/projectsApis';
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import { Skeleton } from '@mui/material';
// ----------------------------------------------------------------------

function ProjectTableRow({allProjectsData,currentpage}) {
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
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.ID}>
                        <StyledTableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            />
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : ((currentpage - 1) * 10 + (i + 1))}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.cluster_name}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                        {loading ? (<Skeleton animation="pulse" />) : (data.user_name ? data.user_name : '-')}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                         {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.project_name}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.project_location}
                        </StyledTableCell>
                       
                       
                        <StyledTableCell>
                            <Label color={data.deleted_at === null ? 'success' : 'error'} >{loading ? <Skeleton sx={{ bgcolor: data.deleted_at === null ? 'success' : 'error' }} animation="pulse" /> : (data.deleted_at === null ? 'Active' : 'Inactive')}</Label>
                         </StyledTableCell> 
                         <StyledTableCell>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : <Action
                                data={data}
                                activeOrInactive={data.deleted_at}
                                pathToNavigate={"/admin/projects/update"}
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