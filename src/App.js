import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/homepage.component';
import Hats from './pages/HatsPage/hats'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
