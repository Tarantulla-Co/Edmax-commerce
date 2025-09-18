// import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Header from "./components/ui/Header";


// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </>
  )
}

export default App
