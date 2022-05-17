import airbnb_logo from "../images/airbnb 1.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={airbnb_logo} alt="airnbn-logo" />
    </nav>
  );
}
