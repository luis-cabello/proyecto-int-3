import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Favoritos from './components/Navbar/Favoritos'
import VerMas from './components/Navbar/VerMas';
import Header from "./components/Header/Header";
import Error404 from './components/Error404/Error404'
import TodasPeliculas from './components/TodasPeliculas/TodasPeliculas'
import detallePelicula from "./components/DetallePelicula/DetallePelicula";
import Home from "./components/Navbar/Home";
import TodasSeries from "./components/TodasSeries/TodasSeries";


function App() {
    
return(
    <React.Fragment>
        <Navbar />
        <Header/>

        <Switch>

        <Route  exact = {true} path='/'/> 

        <Route path='/Favoritos' component = {Favoritos}/> 

        <Route path='/VerMas' component = {VerMas}/> 

        <Route path = '/Home' component = {Home}/>

        <Route path = '/TodasPeliculas' component = {TodasPeliculas} />

        <Route path= '/pelicula/id/:id' component={detallePelicula} />

        <Route path = '/TodasSeries' component={TodasSeries}/>

        <Route path= "" component = {Error404}/>

        </Switch>
        
        <Footer/>
    </React.Fragment>
);
}

export default App;