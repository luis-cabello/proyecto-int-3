import React from 'react';
import { Link } from "react-router-dom";
import Buscador from '../Buscador/Buscador';


function Navbar() {

    return (
        <nav>
            <h2>Vmovies</h2>
            <ul className= 'main-nav' >

                <li> <Link to='/' className='letrablanca'> </Link> </li>

                <li> <Link to='/' className='letrablanca'> Home </Link> </li>

                <li>  <Link to='/Favoritos' className='letrablanca'> Favoritos </Link></li>

                <li><Link  to='/TodasPeliculas' className='letrablanca' > Todas las Peliculas </Link></li>

                <li> <Link to='/TodasSeries' className='letrablanca' > Todas las Series </Link> </li>

                <li> <Link to='/VerTodas' className='letrablanca' > Ver Todas </Link> </li>
            </ul>
            
        </nav>
    )
}

export default Navbar