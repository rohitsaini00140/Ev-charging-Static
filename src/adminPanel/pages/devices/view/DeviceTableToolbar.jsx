import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Iconify from '../../../component/Iconify';
import MenuList from '../../../component/MenuList';
import SearchInput from '../../../component/SearchInput';
import ExcelExport from '../../../component/ExcelExport';
import PdfExport from '../../../component/PdfExport';
// import { fieldsToDownload, fieldMapping, filter } from './headLabel';
import { Stack } from '@mui/material';
import SearchableDropdown from '../../../component/searchableDropdown/SearchableDropdown';
import { useDispatch, useSelector } from 'react-redux';
import Selector from "../../../component/selector/Selector"
import { setDeviceListPageNo, setDeviceName, setDeviceSerialNumber, setDeviceStatus, setDeviceType } from '../../../../globalState/devices/deviceSlices';
import { useGetAllClustersQuery } from '../../../../globalState/cluster/clusterApis';
import { useGetAllProjectsQuery } from '../../../../globalState/projects/projectsApis';
// ----------------------------------------------------------------------

const data = [{ id: 1, name: "Type-A" }, { id: 2, name: "Type-B" }, { id: 3, name: "Type-C" }]
 

function DeviceTableToolbar() {

    const { data: clusters, isSuccess: clustersSuccess } = useGetAllClustersQuery()
    const { data: project, isSuccess: projectSuccess } = useGetAllProjectsQuery()
    
    const allClusters =  clustersSuccess && clusters.clusters
    const allProjects =  projectSuccess && project.projects

    const dispatch = useDispatch()
    const { deviceName, deviceSerialNumber, deviceType, deviceStatus } = useSelector(state => state.device)
    // pagination page filter start here
    function handleSelect(option, type) {
        switch (type) {
            case 'device':
                if (option) {
                    dispatch(setDeviceName(option));
                } else {
                    dispatch(setDeviceName(''));
                }
                break;
            case 'serialNumber':
                if (option) {
                    dispatch(setDeviceSerialNumber(option));
                } else {
                    dispatch(setDeviceSerialNumber(''));
                }
                break;
            case 'type':
                if (option) {
                    dispatch(setDeviceType(option));
                } else {
                    dispatch(setDeviceType(''));
                }
                break;
            case 'status':
                if (option) {
                    dispatch(setDeviceStatus(option));
                } else {
                    dispatch(setDeviceStatus(''));
                }
                break;
            default:
                break;
        }
        dispatch(setDeviceListPageNo(1));
    }

    return (
        <Toolbar
            sx={{
                // height: 96,
                padding: "1.2rem 0rem",
                display: 'flex',
                flexDirection: "column",
                gap: "1rem",
                // p: (theme) => theme.spacing(0, 1, 0, 3),
                // ...(selectedCategoryId.length > 0 && {
                //     color: 'primary.main',
                //     bgcolor: 'primary.lighter',
                // }),
            }}
        >
            {
                // selectedCategoryId.length > 0 ? (
                //     <Typography component="div" variant="subtitle1">
                //         {selectedCategoryId.length} selected
                //     </Typography>
                // ) : 
                // (
                <>

                    {/* // ) */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 3, sm: 2, md: 4 }}
                        width={"100%"}
                    >
                        <Stack width={"100%"}>
                            <SearchInput
                                placeholder="Search Devices"
                                width={"100%"}
                                sx={{ color: "white",background:'#3e403d0f' }}
                                onChange={(e) => handleSelect(e.target.value, "device")}
                                value={deviceName}
                            />
                        </Stack>
                        <Stack width={"100%"} >
                            <SearchableDropdown
                                options={allClusters.length > 0 ? allClusters : []}
                                placeholder="Select Cluster"
                                value={deviceType}
                                sx={{ color: "white",background:'#3e403d0f' }}
                                onChange={(value) => handleSelect(value, "type")}
                                type={"name"}
                            />
                        </Stack>
                        
                        <Stack width={"100%"} >
                            <SearchableDropdown
                                options={allProjects.length > 0 ? allProjects : []}
                                placeholder="Select Project"
                                value={deviceType}
                                sx={{ color: "white",background:'#3e403d0f' }}
                                onChange={(value) => handleSelect(value, "type")}
                                type={"name"}
                            />
                        </Stack>
                        <Stack width={"100%"}>
                            <Selector
                                value={deviceStatus}
                                onChange={(e) => handleSelect(e.target.value, "status")}
                                placeholder='Select Status'
                                selectType="single"
                                options={["Active", "Inactive"]}
                            />
                        </Stack>
                    </Stack>
                </>
            }
            {
                // selectedCategoryId.length > 0 ? (
                //     <Tooltip title="Delete">
                //         <IconButton onClick={() => handleOnClick(selectedCategoryId)}>
                //             <Iconify icon="eva:trash-2-fill" />
                //         </IconButton>
                //     </Tooltip>
                // ) : (

                // <Stack direction={'row'} alignItems={"center"} spacing={2} width={"100%"}>
                //     <PdfExport
                //     // data={allCategories.length > 0 && allCategories}
                //     // fileName="Categories.pdf"
                //     // fields={fieldsToDownload}
                //     // fieldMapping={fieldMapping}
                //     />
                //     <ExcelExport
                //     // data={allCategories.length > 0 && allCategories}
                //     // fileName="Categories"
                //     // fields={fieldsToDownload}
                //     // fieldMapping={fieldMapping}
                //     />
                // </Stack>
                // // )
            }
        </Toolbar>
    );
}

export default DeviceTableToolbar;