import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Favoritos from './components/Navbar/Favoritos';
import VerMas from './components/Navbar/VerMas';
import Pelicula from "./components/Peliculas/Peliculas";
import Series from "./components/Series/Series";

function App() {
    



return(
    <React.Fragment>
        <Navbar />
       
        <Switch>
        <Route  exact = {true} path='/'>  </Route>
        <Route path='/Favoritos' comnponent = {Favoritos}>  </Route>
        <Route path='/VerMas' comnponent = {VerMas}>  </Route>
        </Switch>
        
        <Pelicula/>
        <Series/>

        
        <Footer/>
    </React.Fragment>
);
}

export default App;