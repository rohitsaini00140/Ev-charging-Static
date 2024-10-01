import { FileUpload } from 'primereact/fileupload';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./Uploader.css";

function Uploader({ onChange, image, dataId, uploadType, onDelete }) {

    const hideButtons = {
        display: 'none'
    };

    return (
        <Stack className="card">
            <FileUpload
                multiple={uploadType === 'multiple'}
                accept="image/*"
                emptyTemplate={<p>Drag and drop files to here to upload.</p>}
                uploadOptions={{ style: hideButtons }}
                cancelOptions={{ style: hideButtons }}
                onSelect={onChange}
            />
            {
                (image && Array.isArray(image)) ? image.map((img) => {
                    return <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0rem 1rem" }}>
                        <Box sx={{ width: "5rem", height: "5rem", border: ".1rem solid black", marginBottom: "1rem" }}>
                            <img
                                src={`http://localhost:3000/${img.filePath}`}
                                alt='error'
                                key={img.fileId}
                                width="100%"
                                height="100%"
                            />
                        </Box>
                        <span>
                            <ClearIcon
                                sx={{ cursor: "pointer", marginRight: "1.8rem" }}
                                onClick={() => onDelete(img.fileId, dataId)}
                            />
                        </span>
                    </Box>
                })
                    :
                    image && <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0rem 1rem" }}>
                        <Box sx={{ width: "5rem", height: "5rem", border: ".1rem solid black", marginBottom: "1rem" }}>
                            <img
                                src={`http://localhost:3000/${image.filePath}`}
                                alt='error'
                                width="100%"
                                height="100%"
                            />
                        </Box>
                        <span>
                            <ClearIcon
                                sx={{ cursor: "pointer", marginRight: "1.8rem" }}
                                onClick={() => onDelete(dataId)}
                            />
                        </span>
                    </Box>
            }
        </Stack>
    )

}

export default Uploader;