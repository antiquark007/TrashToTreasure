import { Routes, Route } from 'react-router-dom'
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import ContactPage from "./components/Pages/Contact/contact" // Changed to lowercase
import Error from "./components/Error"
import Nav from "./components/Header2/nav" // Add Nav import
import InformationPage from "./components/Pages/Information/InformationPage"

function App() {
  return (
    <>
      {/* <Nav /> Add Nav component here */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/information" element={<InformationPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
