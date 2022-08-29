import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Favoritos from './components/Navbar/Favoritos'
import VerMas from './components/Navbar/VerMas'

function App() {
    



return(
    <React.Fragment>
        <Navbar />
       
        <Switch>
        <Route  exact = {true} path='/'>  </Route>
        <Route path='/Favoritos' comnponent = {Favoritos}>  </Route>
        <Route path='/VerMas' comnponent = {VerMas}>  </Route>
        </Switch>

        
        <Footer/>
    </React.Fragment>
);
}

export default App;