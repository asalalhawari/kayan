import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ContactUs from './ContactUs';
import About from './About';
import Solution from './Solution';
import Demo from './Demo'
import ProviderSolutions from './ProviderSolutions';
import PayerSolutions from './PayerSolutions';
import Footer from './Footer';
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/demo" element={<Demo />} />

      <Route path="/solution" element={<Solution />} /> 
      <Route path="/provider-solutions" element={<ProviderSolutions />} />
      <Route path="/payer-solutions" element={<PayerSolutions />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </Routes>
     
     <Footer />
  </Router>

  );
}

export default App;
