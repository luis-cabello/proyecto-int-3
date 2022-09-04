import React, {Component} from "react";
import {Link} from 'react-router-dom';

class PeliculaCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            value:""
        }
    }

agregarYQuitarDeFavoritos(id){
    // Tiene que agregar un id dentro de un Array y guardarlo en localstorgae
    // Si el id ya existe ofrecer al usarlo la posibilidad de quitar el id del array de favoritos
    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritos')

    if(recuperoStorage !== null){
        let favoritosToArray = JSON.parse(recuperoStorage)
        favoritos = favoritosToArray
    }

    if(favoritos.includes(id)){
        let idSacar = favoritos.indexOf(id)
        favoritos.splice(idSacar, 1)
    } else {
        favoritos.push(id);
    }

    let favsAsString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsAsString)
    console.log(localStorage);

}

    render(){
        console.log(this.props);
        return(
        <article className='character-card'>
            <p onClick={()=>this.agregarYQuitarDeFavoritos(this.props.data.id)}> Agregar a favoritos </p>
            <h2>{this.props.title}</h2>  
            <Link to={`/pelicula/id/${this.props.data.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""/>
            </Link>
            <p className='more'>Detalle</p>               
        </article>
           
        )
    }
} 

export default PeliculaCard;
