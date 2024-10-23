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
import { setProjectKeywords, setProjectListPageNo, setProjectStatus } from '../../../../globalState/projects/projectsSlices';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllClustersQuery } from '../../../../globalState/cluster/clusterApis';
import { setClusterName } from '../../../../globalState/cluster/clusterSlices';
import { useGetAllUserQuery } from '../../../../globalState/user/userApis';
import { setUserName } from '../../../../globalState/user/userSlice';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Selector from '../../../component/selector/Selector';


const role = JSON.parse(sessionStorage.getItem("role"))


function ProjectTableToolbar() {

    const dispatch = useDispatch()
    const location = useLocation()

    const { searchProjectKeywords, projectStatus } = useSelector(state => state.project)

    const { clusterName } = useSelector(state => state.cluster)

    const { userName } = useSelector(state => state.user)

    const { data: clusterData, isSuccess: clusterSuccess } = useGetAllClustersQuery()

    const { data: userData, isSuccess: userSuccess } = useGetAllUserQuery()

    const allCluster = clusterSuccess && clusterData?.clusters

    const allUser = userSuccess && userData?.users

    function handleSelect(option, type) {
        switch (type) {
            case 'project':
                if (option) {
                    dispatch(setProjectKeywords(option));
                } else {
                    dispatch(setProjectKeywords(''));
                }
                break;
            case 'cluster':
                if (option) {
                    dispatch(setClusterName(option));
                } else {
                    dispatch(setClusterName(''));
                }
                break;
            case 'user':
                if (option) {
                    dispatch(setUserName(option));
                } else {
                    dispatch(setUserName(''));
                }
                break;
            case 'status':
                if (option) {
                    dispatch(setProjectStatus(option));
                } else {
                    dispatch(setProjectStatus(''));
                }
                break;
            default:
                break;
        }
        dispatch(setProjectListPageNo(1));
    }

    useEffect(() => {
        return () => {
            dispatch(setProjectKeywords(''));
            dispatch(setClusterName(''));
            dispatch(setUserName(''));
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
                                sx={{ color: "white",background:'#3e403d0f'}}
                                placeholder="Search Projects"
                                width={"100%"}
                                onChange={(e) => handleSelect(e.target.value, "project")}
                                value={searchProjectKeywords}
                            />
                        </Stack>
                        {role?.user?.role?.name === "Superadmin" && <Stack width={"100%"}>
                            <SearchableDropdown
                                options={allCluster.length > 0 ? allCluster : []}
                                placeholder="Select Cluster"
                                value={clusterName || ""}
                                onChange={(value) => handleSelect(value, "cluster")}
                                type={"name"}
                            />
                        </Stack>}
                        {/* <Stack width={"100%"} >
                            <SearchableDropdown
                                options={allUser.length > 0 ? allUser : []}
                                placeholder="Select User"
                                value={userName || ""}
                                onChange={(value) => handleSelect(value, "user")}
                                type={"name"}
                            />
                        </Stack> */}
                        <Stack width={"100%"}>
                            <Selector
                                value={projectStatus}
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
                //     {/* <MenuList heading={<Iconify icon="ic:round-filter-list" />}
                //     // values={filter}
                //     // onChange={handleOrderChange}
                //     /> */}
                // </Stack>
                // )
            }
        </Toolbar>
    );
}

export default ProjectTableToolbar;