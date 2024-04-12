
import './App.css';
import Home from './Component/Home/Home.js';
import About from './Component/About/About.js';
import Gallery from './Component/Gallery/Gallery.js'
import Service from './Component/Service/Service.js';
import Contact from './Component/Contact/Contact.js';
import Footer from './Component/Footer/Footer.js';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Gallery />
      <Service />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
