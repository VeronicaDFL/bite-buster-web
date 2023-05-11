import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home from "./components/Home.jsx";
import NavMenu from "./components/NavMenu.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import EmailForm from "./pages/EmailForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavMenu />
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/email" element={<EmailForm/>}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
