import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Action from '../../../component/Action';
import Label from "../../../component/lable/Lable"
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import { useRestoreDeletedClusterMutation, useSoftDeleteClusterMutation } from '../../../../globalState/cluster/clusterApis';
import { Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

function ClustersTableRow({ allClusterData, currentPageNo }) {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const [softDeleteCluster] = useSoftDeleteClusterMutation()
    const [restoreDeletedCluster] = useRestoreDeletedClusterMutation()

    function onSoftDelete(data) {
        let dataId = data.id
        softDeleteCluster({ id: dataId, softDeletedClusterData: data })
    }

    function onRestoreData(id) {
        restoreDeletedCluster(id)
    }

    return (
        <>
            {allClusterData.length > 0
                ?
                allClusterData.map((data, i) => (
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.id}>
                        <StyledTableCell padding="checkbox">
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />}
                        </StyledTableCell>
                        <StyledTableCell color={"white"} >
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : ((currentPageNo - 1) * 10 + (i + 1))}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.name}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.country_name}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.state_name}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.city_name}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.location}
                        </StyledTableCell>
                          <StyledTableCell>
                            <Label color={data.deleted_at === null ? 'success' : 'error'} >{loading ? <Skeleton sx={{ bgcolor: data.deleted_at === null ? 'success' : 'error' }} animation="pulse" /> : (data.deleted_at === null ? 'Active' : 'Inactive')}</Label>
                         </StyledTableCell> 
                          <StyledTableCell>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : <Action
                                data={data}
                                activeOrInactive={data.deleted_at}
                                pathToNavigate={"/admin/cluster/update"}
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
export default ClustersTableRow;