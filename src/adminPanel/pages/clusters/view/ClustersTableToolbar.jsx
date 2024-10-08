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
import { fieldMapping, fieldsToDownload } from './clustersData';
import { useDispatch, useSelector } from 'react-redux';
import { setClusterListPageNo, setClusterKeywords } from '../../../../globalState/cluster/clusterSlices';
import { setCountryId } from '../../../../globalState/address/addressSlices';
import SearchableDropdown from '../../../component/searchableDropdown/SearchableDropdown';
import { useGetCountryQuery } from '../../../../globalState/address/addressApi';

// ----------------------------------------------------------------------

function ClustersTableToolbar({ allClusterData }) {

    const dispatch = useDispatch()

    const { searchClusterKeywords } = useSelector(state => state.cluster);

    const { data: countryData, isSuccess: countrySuccess } = useGetCountryQuery()

    const { countryId } = useSelector(state => state.address)

    const allCountry = countrySuccess && countryData?.countries

    console.log(allCountry)

    function handleClusterKeywords(keyWords) {
        sessionStorage.setItem('searchCluster', JSON.stringify(keyWords));
        dispatch(setClusterKeywords(keyWords))
        sessionStorage.removeItem('clusterListPageNo')
        dispatch(setClusterListPageNo(1));
    }

    function handleSelectCountry(selectedCountry) {
        // sessionStorage.setItem('orderType', JSON.stringify(orderType));
        dispatch(setCountryId(selectedCountry))
        sessionStorage.removeItem('clusterListPageNo')
        dispatch(setClusterListPageNo(1));
    }

    return (
        <Toolbar
            sx={{
                // height: 96,
                padding: "1.2rem 0rem",
                display: 'flex',
                flexDirection: "column",
                gap: "1rem",
                bgcolor: "#181837"
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
                                placeholder="Search clusters..."
                                width={"100%"}
                                onChange={(e) => handleClusterKeywords(e.target.value)}
                                value={searchClusterKeywords}
                            />
                        </Stack>
                        <Stack width={"100%"}>
                            <SearchableDropdown
                                options={allCountry || []}
                                placeholder="Select Country"
                                value={countryId || 0}
                                onChange={handleSelectCountry}
                            />
                        </Stack>
                        <Stack width={"100%"}>
                            <SearchableDropdown
                                options={[]}
                                placeholder="Select State"
                            // value={watch("state_id") || 0}
                            // onChange={(newValue) => setValue("state_id", newValue,
                            //     { shouldValidate: true },
                            //     dispatch(setStateId(newValue)),
                            // )}
                            />
                        </Stack>
                        <Stack width={"100%"}>
                            <SearchableDropdown
                                options={[]}
                                placeholder="Select City"
                            // value={watch("state_id") || 0}
                            // onChange={(newValue) => setValue("state_id", newValue,
                            //     { shouldValidate: true },
                            //     dispatch(setStateId(newValue)),
                            // )}
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
                        data={allClusterData.length > 0 && allClusterData}
                        fileName="Cluster.pdf"
                        fields={fieldsToDownload}
                        fieldMapping={fieldMapping}
                    />
                    <ExcelExport
                        data={allClusterData.length > 0 && allClusterData}
                        fileName="Cluster"
                        fields={fieldsToDownload}
                        fieldMapping={fieldMapping}
                    />
                </Stack>
                // )
            }
        </Toolbar>
    );
}

export default ClustersTableToolbar;