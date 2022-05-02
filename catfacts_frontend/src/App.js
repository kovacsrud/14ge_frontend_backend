import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Facts from "./components/Facts";
import Breeds from "./components/Breeds";


import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter basename="/catfacts">
      <Menu />
      <Switch>
        <Route path='/' exact><Main /></Route>
        <Route path='/facts'><Facts /></Route>
        <Route path='/breeds'><Breeds /></Route>
        <Redirect to={'/'} />

      </Switch>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
