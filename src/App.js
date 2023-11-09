import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Portfolios from './components/Portfolios/portfolios';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Portfolios />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
