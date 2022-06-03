import "./App.css";
import Feeds from "./pages/Feeds";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import { AuthReq } from "./hoc/AuthReq";

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/feeds" element={
          <AuthReq>
             <Feeds/>
          </AuthReq>
       
        }/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
