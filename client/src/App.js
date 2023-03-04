import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CardDetails from './components/Home/CardDetails.js'
import Cards from './components/Home/Cards.js'
import Footer from './components/layout/Footer';
import AboutUs from './components/About/AboutUs.js'
function App() {
  return (
    <>
  <Header/>
  <Routes>
    {/* <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/card/:id" element={<CardDetails/>}/>
    <Route path="/cards" element={<Cards/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    </Routes> */}
    { 
    }
  </Routes>
  <Footer/>
    </>
  );
}

export default App;
