import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}


function Home() {
    return (
        <>
            <h1>Front Page</h1>
            <Navbar />
        </>
    )
}

export default Home;