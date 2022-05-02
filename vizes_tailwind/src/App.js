import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Varosok from "./components/Varosok";
import Vizallasok from "./components/Vizallasok";
import {BrowserRouter,Switch,Redirect,Route} from "react-router-dom";

function App() {
  return (
    <div className="bg-sky-100">
      <Header />
      <BrowserRouter basename="/vizallas">
      <Menu />
      <Switch>
        <Route path="/" exact><Main /></Route>
        <Route path="/varosok"><Varosok /></Route>
        <Route path="/vizallas"><Vizallasok /></Route>
        <Redirect to={'/'} />

      </Switch>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
