import './App.css';
import Header from './components/header/Header';
import NavBar from './components/header/NavBar';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import ContactUs from './components/contactus/ContactUs';
import Footer from './components/footer/Footer';
import resumeData from './resumeData';

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <NavBar />
      <About resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Portfolio resumeData={resumeData}/>
      <ContactUs resumeData={resumeData}/>
      <Footer resumeData={resumeData}/>
    </div>
  );
}

export default App;
