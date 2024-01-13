import React,{useContext} from 'react' 
import { ThisIsContext } from '../App'
const ComC = () => {
    const gettingDataFromThisIsContext = useContext(ThisIsContext);
  return (
    <div>
    ComC
    <h1>{gettingDataFromThisIsContext.data}</h1>
    <h1>{gettingDataFromThisIsContext.name.name}</h1>
    <h1>{gettingDataFromThisIsContext.name.age}</h1>
    </div>
  )
}

export default ComC