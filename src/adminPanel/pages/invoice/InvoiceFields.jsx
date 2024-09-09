import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Selector from '../../component/Selector';
import { TableCell, TableBody, TableHead, TableRow, Table, TableContainer } from '@mui/material';
import { Divider, Grid } from '@mui/material';
import { Button, FormControl } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Checkbox } from '@mui/material';
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const tableHead = ["SL.No", "Product Details", "Rate", "Quantity", "Amount", "Action"]

function InvoiceFields() {

    const [rows, setRows] = useState([
        {
            id: 1,
            productName: '',
            productDetails: '',
            rate: '0.00',
            quantity: 0,
        },
    ]);

    const handleAddRow = () => {
        setRows([
            ...rows,
            {
                id: rows.length + 1,
                productName: '',
                productDetails: '',
                rate: '0.00',
                quantity: 0,
            },
        ]);
    };

    const handleDeleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    const handleQuantityChange = (id, change) => {
        setRows(rows.map(row =>
            row.id === id ? { ...row, quantity: row.quantity >= 0 ? (row.quantity + change) : 0 } : row
        ));
    };

    return (
        <FormControl fullWidth>
            <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Typography variant="h6">Address</Typography>
                <TextField name="companyAddress" label="Company Address" multiline />
                <TextField name="postalCode" label="Enter Postal Code" />
                <TextField name="legalRegistrationNo" label="Legal Registration No" />
                <TextField name="emailAddress" label="Email Address" />
                <TextField name="website" label="Website" />
                <TextField name="contactNo" label="Contact No" />
            </Stack>
            <Divider sx={{ my: 6, borderBottom: '1px dashed' }} />
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <TextField name="invoiceNo" label="Invoice No" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker name="datePicker" label="Date Picker" defaultValue={dayjs('2022-04-17')} />
                </LocalizationProvider>
                <Selector placeholder='Select Payment Status' selectType="single" />
                <TextField name="totalAmount" label="Total Amount" />
            </Stack>
            <Divider sx={{ my: 6, borderBottom: '1px dashed' }} />
            <Grid container direction={'row'} spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                    <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <Typography variant="h6">Billing Address</Typography>
                        <TextField name="fullName" label="Full Name" />
                        <TextField name="address" label="Address" multiline />
                        <TextField name="contactNo" label="Contact No" />
                        <TextField name="taxNumber" label="Tax Number" />
                        <Typography sx={{ display: "flex", alignItems: "center" }}> <Checkbox />Will your Billing and Shipping address same?</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <Typography variant="h6">Shipping Address</Typography>
                        <TextField name="fullName" label="Full Name" />
                        <TextField name="address" label="Address" multiline />
                        <TextField name="contactNo" label="Contact No" />
                        <TextField name="taxNumber" label="Tax Number" />
                    </Stack>
                </Grid>
            </Grid>
            <Stack sx={{ mt: 6 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    tableHead.map(headItems =>
                                        <TableCell key={headItems}>{headItems}</TableCell>
                                    )
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, i) => (
                                <TableRow key={row.id}>
                                    <TableCell align="center">{i + 1}</TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1rem",
                                        }}
                                    >
                                        <TextField name="productName" label="Product Name" />
                                        <TextField name="productDetails" label="Product Details" multiline />
                                    </TableCell>
                                    <TableCell align="center">
                                        <TextField name="rate" label="0.00" />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Stack direction="row">
                                            <Button
                                                sx={{
                                                    width: "auto",
                                                    marginRight: ".5rem",
                                                    bgcolor: "#eeeeef",
                                                    borderRadius: "0px",
                                                    BoxShadow: "0",
                                                    '&:hover': {
                                                        backgroundColor: "#eeeeef",
                                                        BoxShadow: "0",
                                                    },
                                                    color: "black",
                                                }}
                                                onClick={() => handleQuantityChange(row.id, -1)}
                                            >
                                                <Icon
                                                    icon="mdi:minus"
                                                    style={{ fontSize: "1.2rem" }}
                                                />
                                            </Button>
                                            <Typography
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: 'center'
                                                }}
                                            >
                                                {row.quantity >= 0 ? row.quantity : 0}
                                            </Typography>
                                            <Button
                                                sx={{
                                                    marginLeft: ".5rem",
                                                    bgcolor: "#eeeeef",
                                                    borderRadius: "0px",
                                                    BoxShadow: "0",
                                                    '&:hover': {
                                                        backgroundColor: "#eeeeef",
                                                        BoxShadow: "0",
                                                    },
                                                    color: "black",
                                                    width: "auto"
                                                }}
                                                onClick={() => handleQuantityChange(row.id, 1)}
                                            >
                                                <Icon
                                                    icon="mdi:plus"
                                                    style={{ fontSize: "1.2rem" }}
                                                />
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography>₹{row.rate * row.quantity}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Icon
                                            icon="mdi:delete"
                                            style={{ fontSize: "1.2rem", color: "red" }}
                                            onClick={() => handleDeleteRow(row.id)}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <Button
                            sx={{
                                borderRadius: "0px",
                                bgcolor: "#e1ebfd",
                                paddingLeft: "1rem",
                                paddingRight: "1rem",
                                marginTop: "1rem"
                            }}
                            onClick={handleAddRow}
                        >
                            <Icon
                                icon="mdi:plus"
                                style={{ fontSize: "1rem" }}
                            />
                            Add Item
                        </Button>
                    </Table>
                </TableContainer>
            </Stack>
            <Divider sx={{ my: 6, borderBottom: '1px dashed' }} />
            <Grid container direction={'row'} spacing={3}>
                <Grid item xs={12}>
                    <Stack spacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid container direction={"row"}>
                            <Grid xs={6}>
                                <Typography sx={{ fontWeight: "600" }}>Sub Total</Typography>
                            </Grid>
                            <Grid xs={2.5}>
                                <Typography>₹0</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} spacing={{ xs: 1 }}>
                            <Grid xs={6}>
                                <Typography sx={{ fontWeight: "600" }}>Estimated Tax (12.5%)</Typography>
                            </Grid>
                            <Grid xs={2.5}>
                                <Typography>₹0</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} spacing={{ xs: 1 }}>
                            <Grid xs={6}>
                                <Typography sx={{ fontWeight: "600" }}>Discount (VELZON15)</Typography>
                            </Grid>
                            <Grid xs={2.5}>
                                <Typography>₹0</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} spacing={{ xs: 1 }}>
                            <Grid xs={6}>
                                <Typography sx={{ fontWeight: "600" }}>Shipping Charge</Typography>
                            </Grid>
                            <Grid xs={2.5}>
                                <Typography>₹0</Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 6, borderBottom: '1px dashed' }} />
                        <Grid container direction={"row"} spacing={{ xs: 1 }}>
                            <Grid xs={6}>
                                <Typography sx={{ fontWeight: "600" }}>Total Amount</Typography>
                            </Grid>
                            <Grid xs={2.5}>
                                <Typography>₹0</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Typography variant="h6">PAYMENT DETAILS</Typography>
                        <Selector placeholder='Payment Method' selectType="single" />
                        <TextField name="fullName" label="Card Holder Name" />
                        <TextField name="address" label="XXXX XXXX XXXX XXXX" />
                        <TextField name="contactNo" label="₹0.00" />
                    </Stack>
                </Grid>
            </Grid>
            <Stack direction="row" justifyContent={"end"} spacing={{ xs: 1 }} mt="2rem">
                <Button
                    sx={{
                        color: "white",
                        borderRadius: "5px",
                        bgcolor: "#0ab39c",
                        height: "2.5rem",
                        BoxShadow: "none",
                        '&:hover': {
                            bgcolor: "#0ab39c"
                        }
                    }}>
                    <Icon
                        icon="mdi:printer"
                        style={{ fontSize: "1.2rem", color: "white", marginRight: ".3rem" }}
                    />
                    Save
                </Button>
                <Button
                    sx={{
                        color: "white",
                        borderRadius: "5px",
                        bgcolor: "#405189",
                        height: "2.5rem",
                        BoxShadow: "none",
                        '&:hover': {
                            bgcolor: "#405189"
                        }
                    }}>
                    <Icon
                        icon="mdi:download"
                        style={{ fontSize: "1.2rem", color: "white", marginRight: ".3rem" }}
                    />
                    Download Invoice
                </Button>
                <Button
                    sx={{
                        color: "white",
                        borderRadius: "5px",
                        bgcolor: "#f06548",
                        height: "2.5rem",
                        BoxShadow: "none",
                        '&:hover': {
                            bgcolor: "#f06548"
                        }
                    }}>
                    <Icon
                        icon="mdi:send"
                        style={{ fontSize: "1.2rem", color: "white", marginRight: ".3rem" }}
                    />
                    Send Invoice
                </Button>
            </Stack>
        </FormControl>
    );
}

export default InvoiceFields;