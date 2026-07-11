import logo from './logo.svg';
import './App.css';
import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';


const techStack = [
  {
    name: 'React',
    imageSrc: logo,
    imageAlt:'React logo',
  },
  {
    name: 'Django',
    imageSrc: 'https://static.djangoproject.com/img/logos/django-logo-negative.svg',
    imageAlt:'Django logo',
  },
  {
    name: 'Python',
    imageSrc: 'https://www.python.org/static/community_logos/python-logo-inkscape.svg',
    imageAlt:'Python logo',
  },
  {
    name: 'PostgreSQL',
    imageSrc: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/postgresql.svg',
    imageAlt:'PostgreSQL logo',
  },
  {
    name: 'Tailwind',
    imageSrc: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/tailwind.svg',
    imageAlt:'Tailwind logo',
  },
  {
    name: 'Github',
    imageSrc: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/github-light.svg',
    imageAlt:'Github logo',
  },
  {
    name: 'Stripe',
    imageSrc: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/stripe.svg',
    imageAlt:'Stripe logo',
  },
]


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <TechStack />
      <MainContent />
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

    
    <div className="nav-header">
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
        </ul>
  );
}



function Header() {
  return (
    <>
      <div className="hero">
        <h2 id="important">Full Stack Developer</h2>
      <h1>Cade Mathurin</h1>
      <p>Building dynamic and responsive modern web applications.</p>
      </div>
      {/*<div className="wrap">
        <canvas id="canvas"></canvas>
      </div>*/}
    </>
  )
}

function TechStack() {
  return (
    <div className="tech-stack">
      {techStack.map((logo) => (
        <div key={logo.name} className="tech-stack-item">
          <img src={logo.imageSrc} alt={logo.imageAlt} />
        </div>
      ))}
    </div>
  );
}

function MainContent() {
  return (
    <main className="content">
      <AboutText />
      <div className="test">
        {/*<img src="https://www.python.org/static/community_logos/python-logo-inkscape.svg" className="" alt="test"/>*/}
      </div>
    </main>
  )
}

function AboutText() {
  return (
    <>
    <div className="about-text">
        <h2 id="important">About Me</h2>
        <h3>Im a Full Stack Developer<br></br> who loves building powerful and scalable<span id="important"> <br></br>web applications.</span></h3>
        <p>I am a London based developer, and I enjoy working with modern technologies to solve<br></br>
           real world problems through clean code. I love taking the time to build a solution that<br></br>
            actually creates a positive impavct for the UI or UX. </p>
      </div>


      <div className="about-text2">
        <span className="code-icon" ><svg xmlns="http://www.w3.org/2000/svg" fill="rgba(45, 45, 45, 0.5)" viewBox="0 0 24 24" height={24} strokeWidth={1.5} stroke="rgba(150, 76, 199, 1)">
  <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</span>
        <p>Clean & efficient code</p>
      </div>
    </>
  );
}

function TableOverlay() {
  return (
    <div className="overlay">
      <table>
        <tr>
          <th>
            Location
          </th>
          <th>
            Experience
          </th>
          <th>
            Availability
          </th>
        </tr>
        <tr>
          <td>
            London, UK
          </td>
          <td>
            2+ Years
          </td>
          <td>
            Open to work
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;



