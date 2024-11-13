import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './about.css';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          We are a team of enthusiastic developers and designers who believe in the power of creativity and technology. Our mission is to build innovative, user-friendly solutions that inspire and transform the way people interact with the digital world. From sleek web design to powerful backend systems, we do it all.
        </p>
        <p className="about-text">
          With years of experience in various technologies, we pride ourselves on delivering high-quality products and services tailored to meet our clients' unique needs. Let us bring your ideas to life.
        </p>
        <Link href="/contact">
          <button className="about-button">Get in Touch</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
