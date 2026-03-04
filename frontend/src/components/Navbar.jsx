import { Link } from "react-router";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Weather Forecast</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/create" style={styles.link}>Add Forecast</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "linear-gradient(90deg,#4facfe,#00f2fe)",
    color: "white",
  },
  link: {
    marginLeft: "15px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Navbar;