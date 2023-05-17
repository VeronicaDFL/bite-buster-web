import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import NavMenu from "./components/NavMenu.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import EmailForm from "./pages/EmailForm.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import HomeCrud from "./components/HomeCrud.jsx";
import Login from "./pages/Login.jsx";
import Form from "./components/Form.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      
      <NavMenu />
      
      <Routes>      
        <Route path="/about" element={<About/>}></Route>
        <Route path="/email" element={<EmailForm/>}></Route>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        <Route path="/homecrud" element={<HomeCrud/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/updateform/:id" element={<UpdateForm/>}></Route>
        <Route path="/form/" element={<Form/>}></Route>
        <Route path="/login/" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      
      <Footer />

    </BrowserRouter>
    </div>
  );
}

export default App;
