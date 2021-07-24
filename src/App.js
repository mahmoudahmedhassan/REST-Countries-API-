import './App.css';
import Countiers from './Componets/Countries/Countiers';
import Header from './Componets/Header/Header';
import County from './Componets/County/County';
import {
  BrowserRouter as Router,
   Route,
 } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Header/>
      <Router> 
        <Route exact path="/" >
          <Countiers/>
        </Route >
        <Route exact path='/Countiers/:name'>
          <County/>
        </Route>
      </Router>
     
    </div>
  );
}

export default App;
