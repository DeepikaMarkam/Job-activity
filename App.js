import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './components/Dashboard';
import Logout from './pages/Logout';
import Homepage from './pages/Homepage';
import store from './redux/store';
import Recommeded from './pages/Recommeded';
import Saved from './pages/Saved';
import Applied from './pages/Applied';
//import Try from './pages/Try';

// import NavBar from './components/NavBar';
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/scss/argon-dashboard-react.scss';

function App() {
  return (
    <BrowserRouter>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/register">Regis</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/dashboard" component={Dashboard} exact></Route>
      </Switch> */}
      <Provider store={store}>
        <Switch>
          <Route path="/" component={Dashboard} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/Recommeded" component={Recommeded}></Route>
          <Route path="/Saved" component={Saved}></Route>
          <Route path="/Applied" component={Applied}></Route>
                   
          <Route path="/dashboard" component={Dashboard} exact></Route>
          <Route
            path="/homepage"
            render={props => <Homepage {...props}></Homepage>}
          ></Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
