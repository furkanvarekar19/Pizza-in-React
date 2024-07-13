
 import React from "react"
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
 import Home from "./pages/Home"
import Sucess from "./pages/Sucess"
import  Error from "./pages/Error"


function App() {
 
     return(
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/sucess" element= {<Sucess/>} />
        <Route path="/*" element= {<Error/>} />

      </Routes>
      </BrowserRouter>
      </>
     )
       
  
}

export default App
