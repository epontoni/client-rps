import { useRef } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./ClipBoard.css";

export default function ClipBoard({ value }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = () => {
    inputRef.current?.select();
    //inputRef.current?.setSelectionRange(0, 99999); // For movil devices *see below
    document.execCommand("copy");
  };
  return (
    <>
    <div className="d-grid col-sm-6 container">
        <div className="input-group container-sm justify-content-center">
            <span className="input-group-text"><i className="bi bi-clipboard"></i></span>
        <input type="text" ref={inputRef} value={value} readOnly={true} className="form-control text-center"/>
        <button onClick={copyToClipboard} className="btn btn-primary">Copy</button>
        </div>
    </div>
    </>
  );
}
