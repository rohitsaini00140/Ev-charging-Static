import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Label from '../../../component/lable/Lable';
import Iconify from '../../../component/Iconify';
import ModalBox from '../../../component/ModalBox';
import Action from '../../../component/Action';
import { deviceData } from './deviceData';
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import { useRestoreDeviceMutation, useSoftDeleteDeviceMutation } from '../../../../globalState/devices/deviceApis';

// ----------------------------------------------------------------------

function DeviceTableRow({ allDeviceData, currentPageNo }) {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const [softDeleteDevice] = useSoftDeleteDeviceMutation()
    const [restoreDevice] = useRestoreDeviceMutation()

    function onSoftDelete(data) {
        let dataId = data.id
        softDeleteDevice({ id: dataId, deletedDeviceData: data })
    }
    function onRestoreData(id) {
        restoreDevice(id)
    }

    return (
        <>
            {allDeviceData.length > 0
                &&
                allDeviceData.map((data, i) => (
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.id}>
                        <StyledTableCell padding="checkbox">
                            {loading ? <Skeleton sx={{ bgcolor: '#3e403d0f' }} animation="pulse" /> : <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />}
                        </StyledTableCell>
                        <StyledTableCell color={"white"} >
                            {loading ? <Skeleton sx={{ bgcolor: '#3e403d0f' }} animation="pulse" /> : ((currentPageNo - 1) * 10 + (i + 1))}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#3e403d0f' }} animation="pulse" /> : data.device_name}
                        </StyledTableCell>
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#3e403d0f' }} animation="pulse" /> : data.serial_number}
                        </StyledTableCell>
                        
                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#3e403d0f' }} animation="pulse" /> : data.project_name}
                        </StyledTableCell>

                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#3e403d0f' }} animation="pulse" /> : data.type}
                        </StyledTableCell>

                        <StyledTableCell color={"#222245"}>
                            {loading ? <Skeleton sx={{ bgcolor: '#3e403d0f' }} animation="pulse" /> : data.device_location}
                        </StyledTableCell>
                         
                        <StyledTableCell>
                        <Label color={data.deleted_at === null ? 'success' : 'error'} >{loading ? <Skeleton sx={{ bgcolor: data.deleted_at === null ? 'success' : 'error' }} animation="pulse" /> : (data.deleted_at === null ? 'Active' : 'Inactive')}</Label>
                        </StyledTableCell>
                        
                        <StyledTableCell>
                            {loading ? <Skeleton sx={{ bgcolor: '#3e403d0f' }} animation="pulse" /> : <Action
                                data={data}
                                activeOrInactive={data.deleted_at}
                                pathToNavigate={"/admin/device/update"}
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

export default DeviceTableRow;