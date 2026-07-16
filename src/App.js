import logo from './logo.svg';
import './App.css';
import React from 'react';


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

const skills = [
  {
    id: '1',
    category: 'Frontend',
    items: [
      {
        name: 'React',
        imageSrc: logo,
        imageAlt: 'React logo'
      },
      {
        name: 'JavaScript',
        imageSrc: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/javascript-light.svg',
        imageAlt: 'JavaScript logo',
      },
      {
        name: 'HTML',
        imageSrc: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/html5.svg',
        imageAlt: 'HTML logo',
      },
      {
        name: 'CSS',
        imageSrc: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/css3.svg',
        imageAlt: 'CSS logo',
      },
      {
        name: 'Tailwind',
        imageSrc: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/tailwind.svg',
        imageAlt: 'Tailwind logo',
      },
      {
        name: 'Bootstrap',
        imageSrc: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/bootstrap.svg',
        imageAlt: 'Bootstrap logo',
      },
    ]
  },
  {
    id: '2',
    category: 'Backend',
    items: [
      {
        name:'Python',
        imageSrc: 'https://www.python.org/static/community_logos/python-logo-inkscape.svg',
        imageAlt: 'Python logo',
      },
      {
        name: 'Django',
        imageSrc: 'https://static.djangoproject.com/img/logos/django-logo-negative.svg',
        imageAlt: 'Django logo',
      },
      {
        name: 'Django REST Framework',
        imageSrc: 'https://icon.icepanel.io/Technology/png-shadow-512/Django-REST.png',
        imageAlt: 'Django REST Framework logo',
      },
      {
      },
    ]
  },
  {
    id: '3',
    category: 'Database',
    items: [
      {
        name: 'PostgreSQL',
        imageSrc: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/postgresql.svg',
        imageAlt: 'PostgreSQL logo',
      },
      {
        name: 'SQLite',
        imageSrc: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/sqlitebrowser.svg',
        imageAlt: 'SQLite logo',
      },
      {
      },
    ]
  },
  {
    id: '4',
    category: 'Tools & Others',
    items: [
      {
        name: 'Git',
        imageSrc: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/git.svg',
        imageAlt: 'Git logo',
      }, 
      {
        name: 'Github',
        imageSrc: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/github-light.svg',
        imageAlt:'Github logo',
      },
      {
        name: 'VS Code',
        imageSrc: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vscode.svg',
        imageAlt: 'VS Code logo',
      },
      {
        name: 'PyCharm',
        imageSrc: 'https://resources.jetbrains.com/storage/products/company/brand/logos/PyCharm_icon.png',
        imageAlt: 'PyCharm logo',
      },
      {
        name: 'Stripe',
        imageSrc: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/stripe.svg',
        imageAlt: 'Stripe logo',
      },
    ]
  },
  
]

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "How long will it take to get my chair?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TechStack />
      <MainContent />
      <Accordion data={faqs} />
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



function Hero() {
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
          <img src={logo.imageSrc} alt={logo.imageAlt} className={`${logo.name === 'React' ? 'App-logo' : ''}`}/>
        </div>
      ))}
    </div>
  );
}

function MainContent() {
  return (
    <>
    <main>
      <div className="content">
      <AboutText />
      <div className="test">
        <img src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=1170&
        auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="" alt="test"/>
        {/*<TableOverlay />*/}
      </div>
      </div>
      <section className="skills-section">
        <SkillsCardLayout />
      </section>
    </main>
    
    </>
  )
}

function AboutText() {
  return (
    <>
    <div className="about-text">
        <h2 id="important">About Me</h2>
        <h3>Im a Full Stack Developer<br></br> who loves building powerful and scalable<span id="important"> <br></br>web applications.</span></h3>
        <p>I am a London based developer, and I enjoy working with modern technologies to solve
           real world problems through clean code. I love taking the time to build a solution that
            actually creates a positive impavct for the UI or UX. </p>
      </div>


      <div className="about-text2">
        <span className="icon" ><svg xmlns="http://www.w3.org/2000/svg" fill="rgba(45, 45, 45, 0.5)" viewBox="0 0 24 24" height={24} strokeWidth={1.5} stroke="rgba(150, 76, 199, 1)">
  <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</span>
        <p>Clean & efficient code</p>
        <div>
      <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="rgba(45, 45, 45, 0.5)" viewBox="0 0 24 24" height={24} strokeWidth={1.5} stroke="rgba(150, 76, 199, 1)">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
</svg>

</span>
<p>Problem solver</p>
</div>
<div>
  <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="rgba(45, 45, 45, 0.5)" viewBox="0 0 24 24" height={24} strokeWidth={1.5} stroke="rgba(150, 76, 199, 1)">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
</span>
<p> Continous learner</p>
</div>
<div>
  <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="rgba(45, 45, 45, 0.5)" viewBox="0 0 24 24" height={24} strokeWidth={1.5} stroke="rgba(150, 76, 199, 1)">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>
</span>
<p> Business mindset</p>
</div>
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

function SkillsCardLayout() {
  return (
    <>
    <div className="title">
      <h3 id="important">Skills & technologies</h3>
      <h2> Technologies I work with</h2>
    </div>
    <div className="skills-content">
      <SkillsCard />
    </div>
    </>
  );
}

function SkillsCard() {
  const borderColors = {
    Frontend: '#3b82f6',
    Backend: '#10b981',
    Database: '#f59e0b',
    'Tools & Others': '#8b5cf6',
  };

  return (
    <div className="skill-card-list">
      {skills.map((skill) => {
        const showImages = skill.category === 'Frontend' || skill.category === 'Backend';
        const borderColor = borderColors[skill.category] || '#3029d6';

        return (
          <div
            key={skill.id}
            className="skill-card"
            style={{ borderColor: borderColor }}
          >
            <h3>{skill.category}</h3>
            <div className="skill-items">
              {skill.items.map((item) => {
                if (!item?.name) return null;

                return (
                  <div key={`${skill.id}-${item.name}`} className="skill-item">
                    {showImages && item.imageSrc ? (
                      <img src={item.imageSrc} alt={item.imageAlt} />
                    ) : null}
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          activeIndex={activeIndex}
          onOpen={setActiveIndex}
          key={i}
          num={i + 1}
          title={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        activeIndex={activeIndex}
        onOpen={setActiveIndex}
        key={"test 1"}
        num={22}
        title={"Test 1"}
      >
        <p>Allows react developers to:</p>
        <ul>
          <li>Use state and other React features without writing a class.</li>
          <li>
            Share logic between components without changing the component
            hierarchy.
          </li>
          <li>
            Reuse stateful logic without changing your component hierarchy.
          </li>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, children, activeIndex, onOpen }) {
  const isActive = num === activeIndex; // check if the current item's number is equal to the activeIndex, if so, it's active
  function handleToggle() {
    onOpen(isActive ? null : num); // if the item is active, set activeIndex to null, otherwise set it to the current item's number
  }

  return (
    <div className={`item ${isActive ? "open" : ""}`} onClick={handleToggle}>
      <div className="number">{num < 9 ? `0${num}` : num + 1}</div>
      <div className="accordion-title"> {title}</div>
      <p className="icon">{isActive ? "-" : "+"}</p>{" "}
      {/* if isActive is true, show '-' otherwise show '+' */}
      {isActive && <div className="content-box">{children}</div>}
    </div>
  );
}

export default App;



