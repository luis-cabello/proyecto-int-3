import React from 'react';
import {Link} from "react-router-dom";
import Buscador from '../Buscador/Buscador';

function Navbar(){

    return (
        <nav>
            <h2>Vmovies</h2>
            <ul className="main-nav"> 
              <Link exact = {true} to= '/' className='letrablanca'> Home </Link>
              <Link to = '/favoritos' className='letrablanca'> Favoritos </Link>
              <Link to = '/VerMas' className='letrablanca' > Ver Mas </Link>
            </ul>
             <Buscador/>
        </nav>
    )
}

export default Navbar