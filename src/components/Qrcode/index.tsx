import React, { useState } from 'react';
import { Container } from "./styles";
import QRCode from 'qrcode.react';

const Qrcode: React.FC = () => {
  const [text, setText] = useState('');
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [qrCodeGenerated, setQRCodeGenerated] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleGenerateQRCode = () => {
    setQRCodeGenerated(true);
  };

  const handleDownloadQRCode = () => {
    if (qrCodeGenerated) {
      const svgString = document.querySelector(".qrcode svg")?.outerHTML;
      if (svgString) {
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        const blobUrl = URL.createObjectURL(blob);

        const anchor = document.createElement("a");
        anchor.href = blobUrl;
        anchor.download = "qrcode.svg";
        anchor.click();

        URL.revokeObjectURL(blobUrl);
      }
    }
  };

  return (
    <Container>
      <div className="qr-code-placeholder">
        {qrCodeGenerated && text ? (
          <QRCode value={text} className="qrcode" />
        ) : (
          <div className="qr-code-placeholder-content" />
        )}
      </div>
      <div className="input-container">
        <input
          placeholder="TEXTO"
          className={`input ${isLightTheme ? 'light-theme' : 'dark-theme'}`}
          name="text"
          type="text"
          value={text}
          onChange={handleInputChange}
        />
      </div>
      <div className="button-container">
        <button onClick={qrCodeGenerated ? handleDownloadQRCode : handleGenerateQRCode} type="button" className="button">
          <span className="button__text">{qrCodeGenerated ? 'Download' : 'QR Code'}</span>
          <span className="button__icon">
          <svg
              className="svg"
              data-name="Layer 2"
              id="bdd05811-e15d-428c-bb53-8661459f9307"
              viewBox="0 0 35 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
            </svg>
          </span>
        </button>
      </div>
    </Container>
  );
};

export default Qrcode;
