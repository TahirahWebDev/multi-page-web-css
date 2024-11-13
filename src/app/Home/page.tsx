import Link from 'next/link';
import './Home.css'; // Import custom CSS file

const Home = () => {
  return (
    <main className="home-container">
      <header className="header">
        <h1 className="header-title">Welcome to Our Creative Hub!</h1>
        <p className="header-text">
          We&apos;re passionate developers and designers creating innovative solutions to elevate your business.
          Explore our services and see how we can help you thrive in the digital world.
        </p>
      </header>

      <section className="cards-container">
        {/* Web Development Card */}
        <div className="card">
          <h2 className="card-title">Web Development</h2>
          <p className="card-text">
            Crafting responsive, high-performance websites tailored to your business needs.
            Let us help you create a strong online presence!
          </p>
          <Link href="/about">
            <button className="card-button">Learn More</button>
          </Link>
        </div>

        {/* UI/UX Design Card */}
        <div className="card">
          <h2 className="card-title">UI/UX Design</h2>
          <p className="card-text">
            We create intuitive and visually stunning designs that enhance user experience
            and engagement across all platforms.
          </p>
          <Link href="/about">
            <button className="card-button">Learn More</button>
          </Link>
        </div>

        {/* Backend Services Card */}
        <div className="card">
          <h2 className="card-title">Backend Services</h2>
          <p className="card-text">
            Our backend solutions are designed for scalability and performance, ensuring that
            your applications run smoothly and efficiently.
          </p>
          <Link href="/about">
            <button className="card-button">Learn More</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
