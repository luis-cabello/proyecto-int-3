import React, { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import SerieCard from "../SerieCard/SerieCard";
import Filtro from "../Filtro/Filtro";

class VerTodas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPelicula: [],
            nextUrl : '',
            dataSeries: [],
            backup: []
        }
    }

    componentDidMount() {

        //Mejores Peliculas
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")
            .then(response => response.json())
            .then(data => this.setState(

                { dataPelicula: data.results,
                   nextUrl: data.next }
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
    traerMas(){
        //Traer la siguiente página de personajes
        fetch(this.state.nextUrl)
            .then( res => res.json())
            .then( data => this.setState({
                dataPelicula: data.results.concat(this.state.dataPelicula),
                nextUrl: data.next
            }))
            .catch()
    }


    filtrarPelicula(nombre) {
        let arrayFiltrado =
            this.state.backup.filter
                (pelicula => pelicula.name.toLowerCase().includes(nombre.toLowerCase()))

        this.setState({
            dataPelicula: arrayFiltrado

        })

    }




    //}
    render() {
        return (

            <React.Fragment>
                <div>
                    <Filtro filtro={(nombre) => this.filtrarPelicula(nombre)} />
                    <h2 className="TituloC">Movies</h2>
                </div>
                <section className='card-container'>
                    {this.state.dataPelicula.map((unPelicula, idx) => <PeliculaCard key={unPelicula + idx} data={unPelicula} image={unPelicula.poster_path} title={unPelicula.title} descripcion={unPelicula.overview} />)}
                    <button className = 'button-54' onClick={()=>this.traerMas()}> Traer más </button>
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
export default VerTodas;