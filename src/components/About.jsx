import "./../About.css";

function About() {
  return (
    <div className="about-header">
      <h1><span id="ABOUT">ABOUT</span></h1>

      <ul className="about-list">
        <li>React as library framework</li>
        <li>WebGL and Three.js for graphics</li>
        <li>React Three Fiber for integration between React with JSX and Three.js</li>
        <li>React-Router-DOM for client-side routing</li>
        <li>
          Colors are based on CPK values
          <a href="https://en.wikipedia.org/wiki/CPK_coloring" target="_blank" rel="noreferrer">
            (source)
          </a>
        </li>
        <li>
          Logo source:
          <a href="https://www.flaticon.com/free-icons/chemistry" target="_blank" rel="noreferrer">
            Flaticon
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
