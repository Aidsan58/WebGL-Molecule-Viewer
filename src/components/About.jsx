function About() {
  return (
    <>
        <div className="home-header">
            <h1><span id="ABOUT">ABOUT</span></h1>
            <p>This website takes protein data bank (.PDB) files and renders a scale-accurate model of that protein.</p>
            <p>Technologies used:</p>
            <ul>
              <li>React as library framework</li>
              <li>WebGL and Three.js for graphics</li>
              <li>React Three Fiber for integration between React with JSX and Three.js</li>
              <li>React-Router-DOM for client-side routing</li>
              <li>Colors are based on CPK values https://en.wikipedia.org/wiki/CPK_coloring</li>
              <li>Logo source: https://www.flaticon.com/free-icons/chemistry</li>
            </ul>
        </div>
    </>
  );
}

export default About;