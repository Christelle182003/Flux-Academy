// import logo from "./assets/Logo (Black).svg";
// import "./Header.css"
// import Action from "./Action";
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   }
    
//   return (
//     <div className="header">
//       <div className="logo">
//         <img src={logo} alt="Brand" />
//       </div>
//       <div className="menu">
//         <ul className="menu-items">
//             <li className="menu-list"><a className="menu-link" href="#">Link 1</a></li>
//             <li><a className="menu-link" href="#">Link 2</a></li>
//             <li><a className="menu-link" href="#">Link 3</a></li>
//             <li><a className="menu-link" href="#">Link 4</a></li>
//             <li><a className="menu-link" href="#">Link 5</a></li>
//         </ul>
//       </div>
//       <div className="header-btn">
//         <Action/>
//       </div>
//       <div className="menu-icon" onClick={toggleMenu}>
//         <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
//       </div>
//     </div>
//   );
// }

// export default Header;


import logo from "./assets/Logo (Black).svg";
import "./Header.css";
import Action from "./Action";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
    
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Brand" />
      </div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul className="menu-items">
            <li className="menu-list"><a className="menu-link" href="#">Link 1</a></li>
            <li><a className="menu-link" href="#">Link 2</a></li>
            <li><a className="menu-link" href="#">Link 3</a></li>
            <li><a className="menu-link" href="#">Link 4</a></li>
            <li><a className="menu-link" href="#">Link 5</a></li>
        </ul>
      </div>
      <div className="header-btn">
        <Action/>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>
    </div>
  );
}

export default Header;

