import React, { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import SerieCard from "../SerieCard/SerieCard";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPelicula: [],
            dataSeries: []
        }
    }

    componentDidMount() {

        //Mejores Peliculas
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")
            .then(response => response.json())
            .then(data => this.setState(
                { dataPelicula: data.results }
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
    render(){
        return(

            <React.Fragment> 
                <div>
                    <h2 className="TituloC">Movies</h2>
                </div>
                <section className='card-container'>
                    {this.state.dataPelicula.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title}/>)}
                </section>



                <div>
                    <h2 className="TituloC">Series</h2>
                </div>
                <section className='card-container'>
                    {this.state.dataSeries.map((unSeries, idx )=> <SerieCard key={unSeries + idx} data={unSeries}  image={unSeries.poster_path} title={unSeries.name}/>)}
                </section>





            </React.Fragment>


        )
    }
}
export default Home ;








