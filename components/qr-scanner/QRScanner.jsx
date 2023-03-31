import QrReader from "react-qr-scanner";
import { addMatchToLocalstorage } from "@/utils/localRequests";

const QRScanner = () => {
  return (
    <QrReader
      onScan={(data) => {
        if (data && data.text !== null) {
          const match = JSON.parse(data.text)
          addMatchToLocalstorage(match)
        }
      }}
      style={{ width: '100%', padding: '1rem' }}
    />
  )
}

export default QRScanner