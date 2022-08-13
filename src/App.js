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
      primaryColor: "#FCA61F",
      secondaryColor: "#8873EF",
      lightGrey: "#ACACAC",
      textGrey: "#666666",
      onyx: "#36313D",
      primaryBgColor: "linear-gradient(90deg, rgba(252,196,105,1) 0%, rgba(252,218,105,1) 100%)",
      footerBgColor: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(252,218,105,1) 100%)",
      instagram: "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
      
      boxShadow : "0px 19px 60px rgb(0 0 0 / 8%)",
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
