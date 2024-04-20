import "./Navbar.css";

const menuItems = ["Home", "Explore", "Features", "Contact"];

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Tesla</div>
      <ul className="nav-menu">
        {menuItems.map((item, index) => {
          return (
            <li key={index} className={item === "Contact" ? "nav-contact" : ""}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
