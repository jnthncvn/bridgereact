import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import SuccessLogin from "./Pages/successlogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/successlogin" element={<SuccessLogin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
