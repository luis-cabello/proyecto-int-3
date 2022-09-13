// recuperar
// home
// data api - local storage

import React, {Component} from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";


class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state ={
            dataPeliculas:[],
        }
    }

    
    // Array

    componentDidMount(){
        //condicional recupera storage
        // this . set state data peliculas recuperstorage
        let recuperoStorage = localStorage.getItem('favoritos')
        let moviesArray = []
        let peliculaFavs = []
    

        if (recuperoStorage !== null) { //Si hay algo disinto de null osea hay algo en favoritos
            let favoritosToArray = JSON.parse(recuperoStorage) // Devolvemelo y pasalo a JSON
            moviesArray = favoritosToArray //lo guardamos en el array 
        }
        if( moviesArray !== null) {
            moviesArray.forEach(id => {
            
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
                .then(response =>response.json())
                .then(data => {
                    peliculaFavs.push(data);
                    console.log(this.state.dataPeliculas.length);
                    //for each ids
                    //data adentro array
                    this.setState({dataPeliculas: peliculaFavs});            
            })
                .catch(error => console.log('el error fue '+ error ))
                });
        }
    
        
        

    }

    render(){
        console.log(this.state.dataPeliculas);
        return(
            <React.Fragment> 
                <div>
                    <h2 className="TituloC"> Favoritos </h2>
                </div>
                <section className='card-container'>
                    { this.state.dataPeliculas && this.state.dataPeliculas.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title}/>)}
                    {/* nuevo estado de favoritos con la info de localstorage */}
                </section>
            </React.Fragment>
        )
            
    }
    }

 export default Favoritos;