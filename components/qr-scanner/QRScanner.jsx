import QrReader from "react-qr-scanner";
import { addMatchToLocalstorage } from "@/utils/localRequests";



const QRScanner = (props) => {


  return (
    <QrReader
      onScan={(data) => {
        if (data && data.text !== null) {
          const match = JSON.parse(data.text)
          const localMatches = JSON.parse(localStorage.getItem('matches'))
          if (!localMatches) localStorage.setItem("matches", JSON.stringify([]))
          addMatchToLocalstorage(match)
          props.fetchTeamData()
          props.setShowQRScanner(false)
        }
      }}
      style={{ width: '100%', padding: '1rem' }}
    />
  )
}

export default QRScanner