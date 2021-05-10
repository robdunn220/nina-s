import './App.css';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import { Route, Switch } from 'react-router-dom';
import Navigation from "./Navigation";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/menu' component={Menu}/>
      </Switch>
    </div>
  );
}

export default App;
