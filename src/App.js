import logo from './logo.svg';
import './App.css';
import Test from './Test'
import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  let menuRef = useRef();

  useEffect(()=> {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return()=>{
      document.removeEventListener("mousedown", handler);
    }
  });

  const handleDropdownItemClick = (targetPage) => {
    navigate(targetPage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p onClick={()=> handleDropdownItemClick('/test')}>Test</p>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
