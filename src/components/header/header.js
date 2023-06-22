import "./header.css";
import Logo from "../../assets/images/myntra.png";

const Header = () => {
  return (
    <div className="sticky-header">
      <img className="myntra-logo" src={Logo}></img>
    </div>
  );
};

export default Header;
