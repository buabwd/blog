import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Cafe from './Cafe';
import Home from './Home';
import './index.css'
import Favorite from './Favoritecafe';
import Login from './Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Route  exact path="/">
          <Home />
        </Route>
        <Route path="/Cafe">
          <Cafe />
        </Route>
        <Route path="/Favorite">
          <Favorite />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
