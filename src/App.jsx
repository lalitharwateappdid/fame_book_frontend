//✔ components
import { Home } from "./components/Home"
import { Details } from "./components/Details"
import { Books } from "./components/Books"

// 🎇 third party packages
// react router dom
import {Routes,Route} from "react-router-dom"



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/detail/:id" element={<Details/>} />
      </Routes>
    </>
  )
}

export default App
