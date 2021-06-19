/**
 * @author [Sanjeewa Ranuluge]
 * @email [sbandra725@gmail.com]
 * @create date 2021-06-16 00:42:21
 * @modify date 2021-06-16 00:42:21
 * @desc [description]
 */

/**
 * need to change HashRouter as BrowserRouter
 */
import { HashRouter  as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProductDetail from "./pages/ProductDetail";
import Header from './components/header/header'
import "./app.css";
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/:productId" component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
