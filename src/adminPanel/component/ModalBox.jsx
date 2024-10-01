import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Iconify from './Iconify';
import { MenuItem, Stack } from '@mui/material';
import { Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%",
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalBox({ name, value, heading }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ "&:hover": { bgcolor: "transparent" } }}
      >
        {name}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <MenuItem onClick={handleClose} sx={{ padding: "0", float: "right" }}>
              <Iconify icon="ic:round-close" />
            </MenuItem>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {heading}
            </Typography>
            <Stack
              mt={2}
              direction={"row"}
              spacing={2}
            >
              {
                Array.isArray(value) ? value.map((image) => {
                  return <img
                    src={`http://localhost:3000/${image.filePath}`}
                    alt="error"
                    width="80px"
                    key={image.fileId}
                  />
                })
                  :
                  value && <img
                    src={`http://localhost:3000/${value.filePath}`}
                    alt="error"
                    width="80px"
                  />
              }
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalBox;