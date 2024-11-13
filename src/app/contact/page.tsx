import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './contact.css';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-text">
          Have a project in mind? Or just want to say hello? We&apos;d love to hear from you! Fill out the form below or drop us an email, and we&apos;ll get back to you as soon as possible.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Your Name
            </label>
            <input className="form-input" id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input className="form-input" id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-input" id="message" rows={4} placeholder="Write your message"></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
