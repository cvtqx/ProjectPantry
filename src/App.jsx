import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import Authpage from "./pages/Authpage/Authpage"

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/auth' element={<Authpage />}></Route>
    </Routes>
    </>
  )
}

export default App
