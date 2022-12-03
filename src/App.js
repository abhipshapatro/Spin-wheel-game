import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from "./Components/Result";
import Spinwheel from "./Components/Spinwheel";
import Main from "./Components/Main";
import './index.css'

function App() {
  return (
    
      <div className="flex flex-col items-center justify-center min-h-screen min-w-fit bg-lightGreen bgImage">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/spinwheel" element={<Spinwheel />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </div>
   
  );
}

export default App;
