import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link, index) => (
            <PageLink {...link} className="nav-link" key={link.id} />
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link, index) => {
            return <SocialLink {...link} styling="nav-icon" key={link.id} />;
          })}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
