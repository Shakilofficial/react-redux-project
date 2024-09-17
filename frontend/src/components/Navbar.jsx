import Logo from "../assets/LWSBlog.svg";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
  return (
    <nav className="py-4 border-b">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <AuthButtons />
      </div>
    </nav>
  );
};

export default Navbar;
