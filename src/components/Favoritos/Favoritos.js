// recuperar
// home
// data api - local storage

import React, {Component} from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import SerieCard from "../SerieCard/SerieCard";


class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state ={
            dataPeliculas:[],
            dataSeries: []
        }
    }

    
    // Array

    componentDidMount(){
        //condicional recupera storage
        // this . set state data peliculas recuperstorage
        let recuperoStoragePelis = localStorage.getItem('favoritosPelis')
        let moviesArray = []
        let peliculaFavs = []
        let recuperoStorageSeries = localStorage.getItem('favoritosSeries')
        let seriesArray = []
        let serieFavs = []

        let favoritosPelis = JSON.parse(recuperoStoragePelis)
        let favoritosSeries =JSON.parse(recuperoStorageSeries)

        if (favoritosPelis !== null ){
            if (favoritosPelis.includes(this.state.dataPeliculas)) {
                this.setState({
                    favsMessage: 'Quitar de favoritos'
                })
            }
        }
        

        if (recuperoStoragePelis !== null) { //Si hay algo disinto de null osea hay algo en favoritos
            let favoritosToArray = JSON.parse(recuperoStoragePelis) // Devolvemelo y pasalo a JSON
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

        if (recuperoStorageSeries !== null) { //Si hay algo disinto de null osea hay algo en favoritos
            let favoritosToArray = JSON.parse(recuperoStorageSeries) // Devolvemelo y pasalo a JSON
            seriesArray = favoritosToArray //lo guardamos en el array 
        }
        if( seriesArray !== null) {
            seriesArray.forEach(id => {
                
            
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
                .then(response =>response.json())
                .then(data => {
                    serieFavs.push(data);
                    console.log(this.state.dataSeries.length);
                    //for each ids
                    //data adentro array
                    this.setState({dataSeries: serieFavs});            
            })
                .catch(error => console.log('el error fue '+ error ))
                });
        }
    
    

    }

    render(){
        console.log(this.state.dataPeliculas);
        console.log(this.state.dataSeries);
        return(
            <React.Fragment> 
                <div>
                    <h2 className="TituloC"> Favoritos </h2>
                </div>
                <section className='card-container'>
                    {this.state.dataPeliculas.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title}/>)}
                    {this.state.dataSeries.map((unSerie, idx )=> <SerieCard key={unSerie + idx} data={unSerie}  image={unSerie.poster_path} title={unSerie.title}/>)}
                    {/* nuevo estado de favoritos con la info de localstorage */}
                </section>
            </React.Fragment>
        )
            
    }
    }

 export default Favoritos;