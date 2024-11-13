import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="quick-links">
          <h3 className="quick-link-header">Quick Links</h3>
          <Link href="/" className="quick-link-item">Home</Link>
          <Link href="/about" className="quick-link-item">About</Link>
          <Link href="/contact" className="quick-link-item">Contact</Link>
        </div>

        {/* Social Media Links */}
        <div className="social-media-links">
          <Link href="#" className="social-icon-link">
            <FaFacebookF className="icon" />
          </Link>
          <Link href="#" className="social-icon-link">
            <FaTwitter className="icon" />
          </Link>
          <Link href="#" className="social-icon-link">
            <FaLinkedinIn className="icon" />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
