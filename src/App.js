import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Favoritos from './components/Favoritos/Favoritos';
import Header from "./components/Header/Header";
import Error404 from './components/Error404/Error404'
import TodasPeliculas from './components/TodasPeliculas/TodasPeliculas'
import detallePelicula from "./components/DetallePelicula/DetallePelicula";
import Home from "./components/Home/Home";
import TodasSeries from "./components/TodasSeries/TodasSeries";
import detalleSerie from "./components/DetalleSeries/DetalleSeries";
import VerTodas from './components/VerTodas/VerTodas'


function App() {
    
return(
    <React.Fragment>
        <Navbar />
        <Header/>

        <Switch>

        <Route path = '/' exact  component = {Home}/>

        <Route path='/Favoritos' component = {Favoritos}/> 

        <Route path = '/TodasPeliculas' component = {TodasPeliculas} />

        <Route path= '/pelicula/id/:id' component={detallePelicula} />

        <Route path = '/TodasSeries' component={TodasSeries}/>

        <Route path= '/serie/id/:id' component={detalleSerie} />

        <Route path = '/VerTodas' component = {VerTodas} />

        <Route path= "" component = {Error404}/>

        </Switch>
        
        <Footer/>
    </React.Fragment>
);
}

export default App;