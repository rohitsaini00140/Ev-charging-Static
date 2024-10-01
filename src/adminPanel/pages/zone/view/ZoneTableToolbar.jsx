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
import Selector from '../../../component/selector/Selector';
import { fieldsToDownload, fieldMapping } from './zoneData';

// ----------------------------------------------------------------------

function ZoneTableToolbar({ allZoneData }) {

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
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        width={"100%"}
                    >
                        <Stack width={"100%"}>
                            <SearchInput
                                sx={{ color: "white" }}
                                placeholder="Search zones..."
                                width={"100%"}
                            // onChange={(e) => handleSearchKeywords(e.target.value)}
                            // value={searchKeywords}
                            />
                        </Stack>
                        {/* <Stack width={"100%"}>
                            <Selector
                                placeholder='Select Role'
                                selectType="single"
                                options={["User", "Admin", "Moderator"]}
                            />
                        </Stack> */}
                        <Stack width={"100%"}>
                            <Selector
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

                <Stack direction={'row'} alignItems={"center"} spacing={2} width={"100%"}>
                    <PdfExport
                        data={allZoneData.length > 0 && allZoneData}
                        fileName="Zones.pdf"
                        fields={fieldsToDownload}
                        fieldMapping={fieldMapping}
                    />
                    <ExcelExport
                        data={allZoneData.length > 0 && allZoneData}
                        fileName="Zones"
                        fields={fieldsToDownload}
                        fieldMapping={fieldMapping}
                    />
                </Stack>
                // )
            }
        </Toolbar>
    );
}

export default ZoneTableToolbar;