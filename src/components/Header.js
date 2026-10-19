import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="HeadContainer">
      <img
        src="https://png.pngtree.com/png-vector/20250910/ourmid/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.webp"
        alt="Img"
        className="headImg"
      />
      <input
        placeholder="Enter the food you wanna taste"
        type="text"
        className="searchEng"
      />
      <div className="navItems">
        <ul>
          <li>{onlineStatus ? <b>Online 🟢</b> : <b>Offline 🛑</b>}</li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/About">About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Contact">Contact Us</Link>{" "}
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
