import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import { Navbar } from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styles/style.css'
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
