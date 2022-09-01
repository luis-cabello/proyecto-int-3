import React from 'react';
import {Link} from "react-router-dom";

function Navbar(){

    return (
        <nav>
            <ul className="main-nav">
              <Link exact = {true} to= '/' className='letrablanca'> Home </Link>
              <Link to = '/favoritos' className='letrablanca'> Favoritos </Link>
              <Link to = '/VerMas' className='letrablanca' > Ver Mas </Link>
            </ul>
            <ul className="user">
                <li>Nombre usuario <img src="./img/user.jpg" alt=""/></li>
            </ul>
        </nav>
    )
}

export default Navbar