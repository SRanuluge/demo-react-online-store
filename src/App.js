/**
 * @author [Sanjeewa Ranuluge]
 * @email [sbandra725@gmail.com]
 * @create date 2021-06-16 00:42:21
 * @modify date 2021-06-16 00:42:21
 * @desc [description]
 */
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:productId" component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
