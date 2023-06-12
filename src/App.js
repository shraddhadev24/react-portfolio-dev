import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './container/about/About';
import Project from './container/projects/Projects';
import Footer from './container/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
