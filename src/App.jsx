import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import ClickSpark from './components/ClickSpark';
import './App.css';

function App() {
  return (
    <ClickSpark sparkColor="rgba(180, 140, 255, 0.6)" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}><main>
      <Hero />
      <About />
      <Projects />
      <Strengths />
      <Contact />
    </main></ClickSpark>
  );
}

export default App;
