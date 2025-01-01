import { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState();
    const handleGenerateQrCode = () => {
        setQrCode(input)
        setInput("")
    }
  return (
    <>
      <div className="main">
        <h1>QrCodeGenerator</h1>
        <div className="input-section">
          <input onChange={(e) =>setInput(e.target.value)} value={input} type="text" name="qr-code" placeholder="Enter your value here"/>
          <button disabled={input && input.trim() !== ''? false :true} onClick={handleGenerateQrCode}>Generate</button>
        </div>
        <div className="qr-section">
            <QRCode id="qr-code-value" value={qrCode} size={200} bgColor="#fff"/>
        </div>
      </div>
    </>
  );
};

export default QrCodeGenerator;
