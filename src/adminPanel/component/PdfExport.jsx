// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
import Iconify from './Iconify';

function PdfExport({ data, fileName, fields, fieldMapping }) {

    // function downloadPDF() {
    //     const doc = new jsPDF();

    //     const displayFields = fields.map(field => fieldMapping[field] || field);

    //     const tableRows = data.map(item => {
    //         return fields.map(field => {
    //             if (field === 'createdAt' && item[field]) {
    //                 return new Date(item[field]).toLocaleString();
    //             } else if (Array.isArray(item[field])) {
    //                 return item[field].join(', ');
    //             } else {
    //                 return item[field] || '';
    //             }
    //         });
    //     });

    //     doc.autoTable({
    //         head: [displayFields],
    //         body: tableRows,
    //     });

    //     doc.save(fileName);
    // }

    return (
        <Iconify icon="vscode-icons:file-type-pdf2"
            // onClick={downloadPDF}
            sx={{ cursor: "pointer", fontSize: "2rem" }}
        />
    )
}

export default PdfExport;