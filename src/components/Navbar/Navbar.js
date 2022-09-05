import React from 'react';
import {Link} from "react-router-dom";
import Buscador from '../Buscador/Buscador';


function Navbar(){

    return (
        <nav>
            <h2>Vmovies</h2>
            <ul className="main-nav"> 
              <Link exact = {true} to= '/' className='letrablanca'> </Link>

              <Link to= '/' className='letrablanca'> Home </Link>
              
              <Link to = '/Favoritos' className='letrablanca'> Favoritos </Link>
              
              <Link to = '/VerMas' className='letrablanca' > Ver Mas </Link>
              
              <Link to = '/TodasPeliculas' className='letrablanca' > Todas las Movies </Link>

              <Link to = '/TodasSeries' className='letrablanca' > Todas las Series </Link>
            </ul>
             <Buscador/>
        </nav>
    )
}

export default Navbar