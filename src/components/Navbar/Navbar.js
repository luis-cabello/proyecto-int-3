import React from 'react';
import { Link } from "react-router-dom";
import Buscador from '../Buscador/Buscador';


function Navbar() {

    return (
        <nav>
            <h2>Vmovies</h2>
            <ul className= 'main-nav' >

                <li> <Link exact={true} to='/' className='letrablanca'> </Link> </li>

                <li> <Link to='/' className='letrablanca'> Home </Link> </li>

                <li>  <Link to='/Favoritos' className='letrablanca'> Favoritos </Link></li>

                <li><Link to='/TodasPeliculas' className='letrablanca' > Todas las Movies </Link></li>

                <li> <Link to='/TodasSeries' className='letrablanca' > Todas las Series </Link></li>
            </ul>
            <Buscador />
        </nav>
    )
}

export default Navbar