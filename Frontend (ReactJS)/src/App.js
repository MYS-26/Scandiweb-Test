import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AddProduct from "./AddProduct";
import Footer from "./Footer";
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add-product">
            <AddProduct />
          </Route>
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
