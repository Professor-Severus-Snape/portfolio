import About from './components/sections/About';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Main from './components/layout/Main';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills';
import TopBar from '@/components/layout/TopBar';

const App = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Main>
        <About />
        <Skills />
        <Projects />
      </Main>
      <Footer />
    </>
  );
};

export default App;
