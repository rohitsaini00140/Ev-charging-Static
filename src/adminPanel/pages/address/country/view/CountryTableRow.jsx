import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Action from '../../../../component/Action';
import { StyledTableCell, StyledTableRow } from '../../../../component/tableStyle';
import Label from "../../../../component/lable/Lable"
import { Skeleton } from '@mui/material';
import { allCounrtyData } from "./countryData"

// ----------------------------------------------------------------------

function CountryTableRow() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {allCounrtyData.length > 0
                &&
                allCounrtyData.map((data, i) => (
                    < StyledTableRow hover tabIndex={-1} role="checkbox" key={data.ID}
                    >
                        <StyledTableCell padding="checkbox">
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />}
                        </StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : i + 1}</StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.name}</StyledTableCell>
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

export default CountryTableRow;