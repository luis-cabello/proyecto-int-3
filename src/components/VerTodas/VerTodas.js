import React, { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import SerieCard from "../SerieCard/SerieCard";
import Filtro from "../Filtro/Filtro";

class VerTodas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPelicula: [],
            nextUrl : 1,
            dataSeries: [],
            backup: [],
            backupSeries: [], 
            datos: []
        }
    }

    componentDidMount() {

        //Mejores Peliculas
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")
            .then(response => response.json())
            .then(data => this.setState(

                { dataPelicula: data.results,
                   nextUrl: data.page + 1,
                   backup: data.results,
                datos: data }
                // nextUrl: dataPelicula.info.next} 
            ))
            .catch(error => console.log('el error fue ' + error))




        //Mejores Series

        fetch("https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c ")
            .then(response => response.json())
            .then(data => this.setState(
                { dataSeries: data.results, 
                backupSeries: data.results}
            ))
            .catch(error => console.log('el error fue ' + error))


    }
    traerMas(){
        //Traer la siguiente página de personajes
        
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=${this.state.nextUrl}`)
        .then( res => res.json())
        .then( data => this.setState({
            dataPelicula: data.results.concat(this.state.dataPelicula),
            nextUrl: data.page
        }))
        .catch()
    }
    
    
    filtrarPelicula(nombre) {
        let arrayFiltrado =
        this.state.backup.filter
        (pelicula => pelicula.title.toLowerCase().includes(nombre.toLowerCase()))
        
        this.setState({
            dataPelicula: arrayFiltrado
            
        })
        
    }
    
    filtrarSeries(nombre) {
        let arrayFiltrado =
        this.state.backupSeries.filter
                (serie => serie.name.toLowerCase().includes(nombre.toLowerCase()))
                
                this.setState({
                    dataSeries: arrayFiltrado
                    
                })
                
            }
            
            
            //}
            render() {
                console.log(this.state.nextUrl);
                console.log(this.state.datos);
                return (
                    
                    <React.Fragment>
                <div>
                    <Filtro filtro={(nombre) => this.filtrarPelicula(nombre)} />
                    <h2 className="TituloC">Movies</h2>
                    <button className = 'button-54' onClick={()=>this.traerMas(this.state.nextUrl + 1)}> Traer más </button>
                </div>
                <section className='card-container'>
                    {this.state.dataPelicula.map((unPelicula, idx) => <PeliculaCard key={unPelicula + idx} data={unPelicula} image={unPelicula.poster_path} title={unPelicula.title} descripcion={unPelicula.overview} />)}
                </section>




                <div>
                <Filtro filtro={(nombre) => this.filtrarSeries(nombre)} />
                    <h2 className="TituloC">Series</h2>
                </div>
                <section className='card-container'>
                    {this.state.dataSeries.map((unSeries, idx) => <SerieCard key={unSeries + idx} data={unSeries} image={unSeries.poster_path} title={unSeries.name} descripcion={unSeries.overview} />)}
                </section>





            </React.Fragment>


        )
    }
}
export default VerTodas;