import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search";
import {BrowserRouter,Link,Switch,Route,Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Header />
      
      <BrowserRouter>
      <Switch>
        <Route path="/" exact><Main /></Route>
        <Route path="/kereses"><Search /></Route>

      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
