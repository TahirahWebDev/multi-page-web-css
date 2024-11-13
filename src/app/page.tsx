import Navbar from './components/Navbar';
import Home from './Home/page';
import Footer from './components/Footer';
import './globals.css'; // Import the custom CSS

export default function Main() {
  return (
    <div className="main-layout">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
