//import logo from './logo.svg';
import './App.css';
import { Route, Switch} from "react-router-dom";
import Home from './components/homepage/Home';
import Dashboard from './components/dashboard/Dashboard';
import DashboardProduct from './components/dashboard/DashboardProduct';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard_product" component={DashboardProduct} />
    </Switch>
  );
}

export default App;