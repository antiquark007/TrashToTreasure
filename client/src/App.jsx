import { Routes, Route } from 'react-router-dom'
import Login from "./components/Registartion/Login"
import Register from "./components/Registartion/Register"
import Dashboard from "./components/Dashboard"
import Contact from "./components/contact/contact" // Changed to lowercase
import Error from "./components/Error"
import Nav from "./components/Header2/nav" // Add Nav import
import Infopage from "./components/information Page/info"

function App() {
  return (
    <>
      {/* <Nav /> Add Nav component here */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/information" element={<Infopage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
