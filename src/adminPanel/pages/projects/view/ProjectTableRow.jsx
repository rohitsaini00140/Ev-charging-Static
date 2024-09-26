import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Label from '../../../component/lable/Lable';
import Iconify from '../../../component/Iconify';
import ModalBox from '../../../component/ModalBox';
import Action from '../../../component/Action';
import { projectData } from './projectData';
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';

// ----------------------------------------------------------------------

function ProjectTableRow() {

    return (
        <>
            {projectData.length > 0
                &&
                projectData.map((data, i) => (
                    <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.ID}>
                        <StyledTableCell padding="checkbox">
                            <Checkbox disableFocusRipple
                            // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                            // checked={selectedCategoryId.includes(data["ID"])}
                            />
                        </StyledTableCell>
                        <StyledTableCell>{i + 1}</StyledTableCell>
                        <StyledTableCell>{data.name}</StyledTableCell>
                        <StyledTableCell>{data.cluster}</StyledTableCell>
                        <StyledTableCell>{data.user}</StyledTableCell>
                        <StyledTableCell>{data.location}</StyledTableCell>
                        <StyledTableCell>
                            <Label color={data.status === 'Inactive' ? 'error' : 'success'} >{data.status}</Label>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Action data={data}
                            // pathToNavigate={"/category/update"} 
                            />
                        </StyledTableCell>
                    </StyledTableRow>
                ))
            }
        </>
    );
}

export default ProjectTableRow;