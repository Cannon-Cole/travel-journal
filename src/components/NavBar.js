export default function NavBar() {
  return (
    <nav className="NavBar NavBar--flex NavBar--background-color">
      <img
        className="NavBar--img"
        alt="world icon"
        src={require("../images/world-icon.png")}
      />
      <p className="NavBar--color">my travel journal.</p>
    </nav>
  );
}
