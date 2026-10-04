const Header = () => {
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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;