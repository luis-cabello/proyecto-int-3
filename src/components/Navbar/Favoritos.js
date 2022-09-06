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
        let moviesArray = []
        let favoritos = []
        let recuperoStorage = localStorage.getItem('favoritos')

        if (recuperoStorage !== null) { //Si hay algo disinto de null osea hay algo en favoritos
            let favoritosToArray = JSON.parse(recuperoStorage) // Devolvemelo y pasalo a JSON
            favoritos = favoritosToArray //lo guardamos en el array 
        }
        if(favoritos !== null) {
            favoritos.forEach(id => {
            
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
                .then(response =>response.json())
                .then(data => moviesArray.push(data)
                    //for each ids
                    //data adentro array
                )
                .catch(error => console.log('el error fue '+ error ))
                });
        }
    
        this.setState({
        dataPeliculas: moviesArray
        })
        

    }

    render(){
        console.log(this.state.dataPeliculas);
        return(
            <React.Fragment> 
                <div>
                    <h2 className="TituloC">Movies</h2>
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