import logo from './logo.svg';
import './App.css';
import ProjectCard from './components/ProjectCard.jsx';
import Nav from './components/Nav.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <ProjectCard 
        title="test"
        image={logo}
        desc="This is just a test"
      />
    </div>
  );
}

export default App;
