import { useContext } from "react"
import { sendData } from "../App"

// eslint-disable-next-line react/prop-types
const CompC = ({data}) => {
  const getData = useContext(sendData) ;
  return (
    <div>
    CompC :
    {data} 
    <h1>{getData}</h1>
    </div>
  )
}

export default CompC