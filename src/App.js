import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}



function Navbar() {
const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <NavLogo />
        <NavMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavMenu isOpen={isOpen} />
      </div>
    </nav>

    
    <div className="header">
        <NavLogo />
        <NavMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavMenu isOpen={isOpen} />
      </div>
    </>
  );
}

function NavLogo() {
  return (
    <div className="navbar-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
  );
}

function NavMenuButton({ isOpen, setIsOpen }) {
  function onClick() {
    setIsOpen(!isOpen);
  }
  return (
    <button className={isOpen ? "navbar-toggle open" : "navbar-toggle"} aria-label="Toggle navigation" onClick={onClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
  );
}

function NavMenu({ isOpen }) {
  return (
    <ul className={ isOpen ? "navbar-menu open" : "navbar-menu"}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">CV</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
  );
}

export default App;
