import './App.css';
import Navigation from '../src/components/navigation';
import Home from '../src/pages/Home';
import Checkout from '../src/pages/Checkout';
import Catering from '../src/pages/Catering';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import About from '../src/pages/About';
import {
     BrowserRouter as Router,
     Routes,
     Route   } from "react-router-dom";
import Reservations from './pages/Reservations';

function App() {
  return (
     <div>
          <Header/>
          <Router>
               <Navigation/>
               <Routes>
                    <Route exact path="/"  element={<Home />}/>
                    <Route exact path="/reservations"  element={<Reservations />}/>
                    <Route exact path="/catering" element={<Catering />} />
                    <Route exact path="/about" element={<About />}/>
                    <Route exact path="/checkout" element={<Checkout />} />
               </Routes>
          </Router>
          <Footer/>
     </div>
         
     );
}

export default App;