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
import { setCityName, setCountryId, setCountryName, setStateId, setStateName } from '../../../../globalState/address/addressSlices';
import SearchableDropdown from '../../../component/searchableDropdown/SearchableDropdown';
import { useGetCityQuery, useGetCountryQuery, useGetStateQuery } from '../../../../globalState/address/addressApi';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

function ClustersTableToolbar({ allClusterData }) {

    const dispatch = useDispatch()
    const location = useLocation()

    const { searchClusterKeywords } = useSelector(state => state.cluster);

    const { data: countryData, isSuccess: countrySuccess } = useGetCountryQuery()

    const { countryId, countryName, stateName, stateId, cityName } = useSelector(state => state.address)

    const { data: stateData, isSuccess: stateSuccess } = useGetStateQuery(countryId, { skip: !countryId })

    const { data: cityData, isSuccess: citySuccess } = useGetCityQuery(stateId, { skip: !stateId })

    const allCountry = countrySuccess && countryData?.countries

    const allState = stateSuccess && stateData?.states

    const allCity = citySuccess && cityData?.cities

    function handleSelect(option, type) {
        switch (type) {
            case 'cluster':
                if (option) {
                    dispatch(setClusterKeywords(option));
                } else {
                    dispatch(setClusterKeywords(''));
                }
                break;
            case 'country':
                if (option) {
                    const selectedCountryData = allCountry.find(ele => ele.name === option)
                    dispatch(setCountryId(selectedCountryData?.id))
                    dispatch(setCountryName(option))
                } else {
                    dispatch(setCountryName(""))
                    dispatch(setStateName(""))
                    dispatch(setCityName(""))
                    dispatch(setCountryId(""))
                    dispatch(setStateId(""))
                }
                break;
            case 'state':
                if (option) {
                    const selectedStateData = allState.find(ele => ele.name === option)
                    dispatch(setStateId(selectedStateData?.id))
                    dispatch(setStateName(option))
                } else {
                    dispatch(setStateName(""))
                    dispatch(setCityName(""))
                    dispatch(setStateId(""))
                }
                break;
            case 'city':
                if (option) {
                    dispatch(setCityName(option))
                } else {
                    dispatch(setCityName(""))
                }
                break;
            default:
                break;
        }
        dispatch(setClusterListPageNo(1));
    }


    useEffect(() => {
        return () => {
            dispatch(setCountryName(""))
            dispatch(setStateName(""))
            dispatch(setCityName(""))
            dispatch(setCountryId(""))
            dispatch(setStateId(""))
            dispatch(setClusterKeywords(""))
        };
    }, [location, dispatch]);


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
                        spacing={{ xs: 2, sm: 2, md: 4 }}
                        width={"100%"}
                    >
                        <Stack width={{ sm: "100%" }}>
                            <SearchInput
                                sx={{ color: "white" }}
                                placeholder="Search clusters..."
                                width={"100%"}
                                // onChange={(e) => handleClusterKeywords(e.target.value)}
                                onChange={(e) => handleSelect(e.target.value, "cluster")}
                                value={searchClusterKeywords}
                            />
                        </Stack>
                        <Stack width={"100%"}>
                            <SearchableDropdown
                                options={allCountry || []}
                                placeholder="Select Country"
                                value={countryName || ""}
                                // onChange={handleSelectCountry}
                                onChange={(value) => handleSelect(value, "country")}
                                type={"name"}
                            />
                        </Stack>
                        <Stack width={"100%"} >
                            <SearchableDropdown
                                options={allState || []}
                                placeholder="Select State"
                                value={stateName || ""}
                                // onChange={handleSelectState}
                                onChange={(value) => handleSelect(value, "state")}
                                noOptionText={"Select Country First"}
                                type={"name"}
                            />
                        </Stack>
                        <Stack width={"100%"}>
                            <SearchableDropdown
                                options={allCity || []}
                                placeholder="Select City"
                                value={cityName || 0}
                                // onChange={handleSelectCity}
                                onChange={(value) => handleSelect(value, "city")}
                                noOptionText={"Select State First"}
                                type={"name"}
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