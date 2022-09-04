import React, {Component} from "react";
import {Link} from 'react-router-dom';
//Todo
//1) Transformar el componente en un componente con estado.
//2) Recuperar el id de la ruta.
//3) Pedir datos al endpoint de la api de Rick & Morty con el id recuperado y mostrar los datos en pantalla.


class detallePelicula extends Component{
    constructor(props){
        super(props);
        this.state ={
            value:""
        }
        console.log(props);
    }

    render(){
        
        return(
            <React.Fragment>
                <article className='character-card'>
                <h2>{this.props.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""/>
                </article>
                <article>
                    <p>{this.props.data.overview}</p>
                    <p>{this.props.data.vote_average}</p>
                    <p>{this.props.data.release_date}</p>
                    <p>{this.props.data.genre_ids}</p>
                    <button></button>
                </article>
            </React.Fragment>
        )
    }
} 


export default detallePelicula;





