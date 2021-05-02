import Home from '../Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Skill from '../Components/Skill/Skill/Skill';
import Project from '../Components/Project/Project/Project';
import Blog from '../Components/Blog/Blog';
import NavBar from '../Components/Header/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contact/Contact';

function App() {
  return (
      <Router>
        <NavBar/>
       <Switch>
         <Route exact path="/">
            <Home/>
         </Route>
         <Route  path="/home">
            <Home/>
         </Route>
         <Route  path="/skill">
            <Skill/>
         </Route>
         <Route  path="/projects">
            <Project/>
         </Route>
         <Route  path="/blogs">
            <Blog/>
         </Route>
         <Route  path="/contact">
            <Contact/>
         </Route>
       </Switch>
       <Footer/>
      </Router>
  );
}

export default App;
