import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Favoritos from './components/Navbar/Favoritos'
import VerMas from './components/Navbar/VerMas';
import Pelicula from "./components/Peliculas/Peliculas";
import Series from "./components/Series/Series";
import Header from "./components/Header/Header";
import Error404 from './components/Error404/Error404'
import TodasPeliculas from './components/TodasPeliculas/TodasPeliculas'


function App() {
    
return(
    <React.Fragment>
        <Navbar />
        <Header/>

        <Switch>

        <Route  exact = {true} path='/'/> 

        <Route path='/Favoritos' component = {Favoritos}/> 

        <Route path='/VerMas' component = {VerMas}/> 

        <Route path= "" component = {Error404}/>

        <Route path = '/TodasPeliculas' component = {TodasPeliculas} />

        </Switch>

        <Pelicula/>
         <Series/>
        
        
        <Footer/>
    </React.Fragment>
);
}

export default App;