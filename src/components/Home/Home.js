import React, { Component } from "react";
import Buscador from "../Buscador/Buscador";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import SerieCard from "../SerieCard/SerieCard";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPelicula: [],
            dataSeries: [],
            resultadosBusqueda : []
        }
    }

    componentDidMount() {

        //Mejores Peliculas
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")
            .then(response => response.json())
            .then(data => this.setState(

                { dataPelicula: data.results }
                // nextUrl: dataPelicula.info.next} 
            ))
            .catch(error => console.log('el error fue ' + error))




        //Mejores Series

        fetch("https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c ")
            .then(response => response.json())
            .then(data => this.setState(
                { dataSeries: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))
    }
   
    buscarPeli(movie,textSearch){
        if (movie) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&query=${textSearch}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => this.setState({
                resultadosBusqueda : data.results 
            }))
            .catch(err => console.log(err))
        } else {
            fetch(`https://api.themoviedb.org/3/search/tv?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=1&include_adult=false&query=${textSearch}`)
            .then(res => res.json())
            .then(data => this.setState({
                resultadosBusqueda : data.results
            }))
            .catch(err => console.log(err))
        }
    }




    
    render() {
        return (

            <React.Fragment>

                <div>
                   <Buscador buscar = {(movie,textSearch)=> this.buscarPeli(movie,textSearch) }/>
                    <h2 className="TituloC">Movies</h2>
                </div>

                <section>
                    {this.state.resultadosBusqueda.map((unResultado, idx)=> <PeliculaCard key={unResultado + idx} data={unResultado} image={unResultado.poster_path} title={unResultado.title} descripcion={unResultado.overview} /> )}
                </section>
                
                <section className='card-container'>
                    {this.state.dataPelicula.map((unPelicula, idx) => <PeliculaCard key={unPelicula + idx} data={unPelicula} image={unPelicula.poster_path} title={unPelicula.title} descripcion={unPelicula.overview} />)}
                </section>

                <div>
                    <h2 className="TituloC">Series</h2>
                </div>
                <section className='card-container'>
                    {this.state.dataSeries.map((unSeries, idx) => <SerieCard key={unSeries + idx} data={unSeries} image={unSeries.poster_path} title={unSeries.name} descripcion={unSeries.overview} />)}
                </section>


            </React.Fragment>


        )
    }
}
export default Home;








