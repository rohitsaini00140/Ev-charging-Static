import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Action from '../../../component/Action';
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import Label from "../../../component/lable/Lable"
import { Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

function ZoneTableRow({ allZoneData }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {allZoneData.length > 0
                &&
                allZoneData.map((data, i) => (
                    < StyledTableRow hover tabIndex={-1} role="checkbox" key={data.ID}
                    >
                        <StyledTableCell padding="checkbox">
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />}
                        </StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : i + 1}</StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : (data.organization ? data.organization.name : "Not Selected")}</StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.name}</StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : data.location}</StyledTableCell>
                        <StyledTableCell>
                            <Label color={data.deleted_at ? 'error' : 'success'} >{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : (data.deleted_at === null ? 'Inactive' : 'Active')}</Label>
                        </StyledTableCell>
                        <StyledTableCell>{loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : (new Date(data.created_at).toLocaleString())}</StyledTableCell>
                        <StyledTableCell>
                            {loading ? <Skeleton sx={{ bgcolor: '#34345a' }} animation="pulse" /> : <Action
                                activeOrInactive={data.deleted_at}
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

export default ZoneTableRow;