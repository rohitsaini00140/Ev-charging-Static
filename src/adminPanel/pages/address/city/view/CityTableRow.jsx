import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Action from '../../../../component/Action';
import { StyledTableCell, StyledTableRow } from '../../../../component/tableStyle';
import Label from "../../../../component/lable/Lable"
import { Skeleton } from '@mui/material';
import { allCityData } from "./cityData"

// ----------------------------------------------------------------------

function CityTableRow() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {allCityData.length > 0
                &&
                allCityData.map((data, i) => (
                    < StyledTableRow hover tabIndex={-1} role="checkbox" key={data.ID}
                    >
                        <StyledTableCell padding="checkbox">
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />}
                        </StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : i + 1}</StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.state}</StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.name}</StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.postalcode}</StyledTableCell>
                        <StyledTableCell>
                            <Label color={data.status === "Inactive" ? 'error' : 'success'} >{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : (data.status === "Inactive" ? 'Inactive' : 'Active')}</Label>
                        </StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.created}</StyledTableCell>
                        <StyledTableCell>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : <Action
                                // activeOrInactive={data.status}
                                data={data}
                                pathToNavigate={"/admin/zone/update"}
                            />}
                        </StyledTableCell>
                    </StyledTableRow>
                ))
            }
        </>
    );
}

export default CityTableRow;