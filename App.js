import './App.css';
import { BrowserRouter as Router,Switch,Route, useHistory } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import { useSelector } from 'react-redux';
import { selectUserName } from './app/userSlice';
function App() {
  const userName = useSelector(selectUserName);
  const history = useHistory();
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {!userName ? <Route path="/">
            <Login />
          </Route>  : <><Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route></>  }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
