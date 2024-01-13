import  { createContext} from 'react'
import CompA from './Components/CompA'

const CC= createContext() ;
const App = () => {
  const FullName = "Parth Gupta" ;
  const Age= 18 ; 
  return (
    <CC.Provider value={{FullName , Age}}>
    <div>
      <CompA/>
    </div>
    </CC.Provider>
  )
}

export default App
// eslint-disable-next-line react-refresh/only-export-components
export {CC} ;
