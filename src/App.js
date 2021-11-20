import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
import MainComponent from './Components/MainComponent/MainComponent';
import Login from './Components/Login/Login'
import { Route } from 'react-router';
import Alpine from 'alpinejs'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import UserSetting from "./Components/UserSetting/UserSetting";
import DetailsView from './Components/DetailsView/DetailsView';
import Dashboard from './Components/Dashboard/Dashboard';
import CrudOverView from './Components/CrudOverView/CrudOverView';
export default function App() {
  return (

    <div>
      <MainComponent />
      <Router>
                <Switch>
                    <Route exact path="/" component={Login}  />
                    <Route path="/UserSetting">
                      <UserSetting />
                      </Route>
                      <Route path="/DetailsView">
                        <DetailsView />
                      </Route>
                      <Route path="/Dashboard">
                        <Dashboard />
                      </Route>
                      <Route path="/CrudOverview">
                        <CrudOverView />
                      </Route>
                </Switch>
            </Router>
    </div>
  );
}

