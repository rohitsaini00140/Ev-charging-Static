// import { saveAs } from 'file-saver';
// import * as XLSX from 'xlsx';
import Iconify from './Iconify';

const ExcelExport = ({ data, fileName, fields, fieldMapping }) => {

    // const transformData = (data, fields) => {
    //     return data.map(item => {
    //         let transformedItem = {};
    //         fields.forEach(field => {
    //             if (field === 'createdAt') {
    //                 transformedItem[field] = item[field] ? new Date(item[field]).toLocaleString() : '';
    //             } else if (Array.isArray(item[field])) {
    //                 transformedItem[field] = item[field].join(', ');
    //             } else {
    //                 transformedItem[field] = item[field] || '';
    //             }
    //         });
    //         return transformedItem;
    //     });
    // };

    // const exportToExcel = () => {
    //     const transformedData = transformData(data, fields);

    //     const displayHeaders = fields.map(field => fieldMapping[field] || field);

    //     const worksheet = XLSX.utils.json_to_sheet(transformedData);

    //     const headerRow = displayHeaders;
    //     const headers = headerRow.reduce((acc, header, index) => {
    //         acc[XLSX.utils.encode_col(index) + '1'] = { v: header };
    //         return acc;
    //     }, {});

    //     Object.assign(worksheet, headers);

    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    //     const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //     const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    //     saveAs(blob, `${fileName}.xlsx`);
    // };

    return (
        <Iconify icon="vscode-icons:file-type-excel"
            //  onClick={exportToExcel} 
            sx={{ cursor: "pointer", fontSize: "2rem"}}
        />
    );
}

export default ExcelExport;