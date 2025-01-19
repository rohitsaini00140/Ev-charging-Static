import Toolbar from '@mui/material/Toolbar';
import SearchInput from '../../../component/SearchInput';
import ExcelExport from '../../../component/ExcelExport';
import PdfExport from '../../../component/PdfExport';
import { Grid } from "@mui/system";
// import { fieldsToDownload, fieldMapping, filter } from './headLabel';
import { useDispatch, useSelector } from 'react-redux';
import { setDeviceListPageNo, setDeviceID, setDeviceUniqueID, setDeviceActionType } from '../../../../globalState/devices/deviceSlices';
// ----------------------------------------------------------------------

function DeviceLogsTableToolbar() {

    const dispatch = useDispatch()
    const { deviceUniqueID, deviceID, deviceActionType } = useSelector(state => state.device)


    function handleSelect(option, type) {
        switch (type) {
            case 'deviceID':
                if (option) {
                    dispatch(setDeviceID(option));
                } else {
                    dispatch(setDeviceID(''));
                }
                break;
            case 'deviceUniqueID':
                if (option) {
                    dispatch(setDeviceUniqueID(option));
                } else {
                    dispatch(setDeviceUniqueID(''));
                }
                break;
            case 'actionType':
                if (option) {
                    dispatch(setDeviceActionType(option));
                } else {
                    dispatch(setDeviceActionType(''));
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
                    <Grid container spacing={{ xs: 3, sm: 2, md: 2, lg: 2 }} width={"100%"}>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <SearchInput
                                placeholder="Search Device ID"
                                width={"100%"}
                                sx={{ color: "white", background: '#3e403d0f',height:'45px' }}
                                onChange={(e) => handleSelect(e.target.value, "deviceID")}
                                value={deviceID}
                            />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <SearchInput
                                placeholder="Search Unique Id"
                                width={"100%"}
                                sx={{ color: "white", background: '#3e403d0f',height:'45px' }}
                                onChange={(e) => handleSelect(e.target.value, "deviceUniqueID")}
                                value={deviceUniqueID}
                            />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <SearchInput
                                placeholder="Search Event Name"
                                width={"100%"}
                                sx={{ color: "white", background: '#3e403d0f',height:'45px' }}
                                onChange={(e) => handleSelect(e.target.value, "actionType")}
                                value={deviceActionType}
                            />
                        </Grid>
                    </Grid>
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

export default DeviceLogsTableToolbar;