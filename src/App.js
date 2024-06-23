import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import DashboardPage from './Pages/DashboardPage';
import ReportPage from './Pages/ReportPage';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/reports" component={ReportPage} />
      <Route path="/" component={() => <h1>Home Page</h1>} />
    </Switch>
  </Router>
);

export default App;
