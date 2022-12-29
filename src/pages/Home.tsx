import SiteNavbar from 'components/SiteNavbar';
import { Container } from 'react-bootstrap';
import AboutMeSection from 'static/AboutMeSection';
import CareerSection from 'static/CareerSection';
import ProjectSection from 'static/ProjectSection';


function App() {
  return (
    <div className="App">
      <SiteNavbar/>
      <Container className="d-flex flex-column justify-content-center"
        style={{maxWidth: "1000px"}}>
        <AboutMeSection/>
        <ProjectSection/>
        <CareerSection/>
      </Container>
    </div>
  );
}

export default App;
