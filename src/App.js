import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import Profile from './components/Profile';
import Contact from './components/Contact';
import LatestProjects from './components/LatestProjects';
import SkillsAndExperience from './components/SkillsAndExperience';



function App() {
  return (
    <ThemeProvider theme={{
      primaryColor: "#FCDA69",
      secondaryColor: "#8873EF",
      lightGrey: "#ACACAC",
      textGrey: "#666666",
      onyx: "#36313D",
      primaryBgColor: "linear-gradient(90deg, rgba(252,196,105,1) 0%, rgba(252,218,105,1) 100%)",
      footerBgColor: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(252,218,105,1) 100%)",
    }}>
      <Navbar />
      <Profile />
      <SkillsAndExperience id="skills"/>
      <LatestProjects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
