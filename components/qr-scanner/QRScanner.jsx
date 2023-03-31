import QrReader from "react-qr-scanner";

const QRScanner = () => {
    return (
        <div>
          <QrReader
            onScan={(data) => {
              if(data) {
                console.log(data)
              }
            }}
            style={{ width: '100%' }}
          />
        </div>
    )
}

export default QRScanner