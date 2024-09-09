import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichTextEditor({ placeholder, value, onChange }) {

    return <ReactQuill theme="snow" value={value} onChange={onChange} placeholder={placeholder} />;
}

export default RichTextEditor;