import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Program from './components/Program/Program';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Program />
    <Pricing />
    <About />
    <Footer />
    </>
  );
}

export default App;
