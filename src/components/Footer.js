import { pageLinks, socialLinks } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link, index) => {
          return <PageLink {...link} className="footer-link" key={link.id} />;
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link, index) => {
          return <SocialLink {...link} styling="footer-icon" key={link.id} />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
