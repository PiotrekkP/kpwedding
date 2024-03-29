import burger from './burger.png';
import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

export default function SiteHeader() {

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
    <div ref={menuRef} className='menu-container'>
        <h1 className='site-header-h1' onClick={()=> handleDropdownItemClick('/')}>K & P</h1>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={burger} alt='burger-menu'></img>
        </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <ul>
            <DropdownItem text = {"Plan wesela"} to="/plan-wesela" onClick={()=> handleDropdownItemClick('/plan-wesela')}/>
            <DropdownItem text = {"Mapa dojazdu"} to="/mapy" onClick={()=> handleDropdownItemClick('/mapy')}/>
            <DropdownItem text = {"Transport gości"} to="/transport" onClick={()=> handleDropdownItemClick('/transport')}/>
            <DropdownItem text = {"Plan stołów"} to="/plan-stolow" onClick={()=> handleDropdownItemClick('/plan-stolow')}/>
            {/*<DropdownItem text = {"Dodatkowe atrakcje"} to="/atrakcje" onClick={()=> handleDropdownItemClick('/atrakcje')}/>*/}
            <DropdownItem text = {"Więcej..."} to="/wiecej" onClick={()=> handleDropdownItemClick('/wiecej')}/>
          </ul>
        </div>
      </div>
  );
}

function DropdownItem(props){
    return(
      <li className = 'dropdownItem' onClick={props.onClick}>
        <a href={props.to}>{props.text}</a>
      </li>
    );
  }