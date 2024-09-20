import Iconify from "./Iconify";
import { MenuItem } from "@mui/material";
import { Popover } from "@mui/material";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Action({ data, pathToNavigate, onSoftDelete, onRestoreData, activeOrInactive }) {

    let navigate = useNavigate()

    const [open, setOpen] = useState(null);

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    const handleGetDataId = () => {
        setOpen(null);
        navigate(`${pathToNavigate}/${data.id}`)
    }

    const handleSoftDelete = () => {
        onSoftDelete(data);
        handleCloseMenu();
    };

    const handleRestore = () => {
        onRestoreData(data.id);
        handleCloseMenu();
    };

    return (
        <>
            <IconButton onClick={handleOpenMenu}>
                <Iconify icon="eva:more-vertical-fill" />
            </IconButton>
            <Popover
                open={!!open}
                anchorEl={open}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: { width: 140 },
                }}
            >
                {!activeOrInactive ? (
                    <>
                        <MenuItem
                            onClick={handleGetDataId}
                        >
                            <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
                            Edit
                        </MenuItem>

                        <MenuItem
                            onClick={handleSoftDelete}
                            sx={{ color: 'error.main' }}>
                            <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
                            Delete
                        </MenuItem>
                    </>
                )
                    :
                    (<MenuItem
                        onClick={handleRestore}
                        sx={{ color: 'success.main' }}
                    >
                        <Iconify icon="fa-solid:trash-restore" sx={{ mr: 2 }} />
                        Restore
                    </MenuItem>)
                }
            </Popover>
        </>
    )
}

export default Action