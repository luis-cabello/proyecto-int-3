import React, {Component} from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";


class TodasPeliculas extends Component {
    constructor(props){
        super(props);
        this.state ={
            dataPeliculas:[],
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")
        .then(response =>response.json())
        .then(data => this.setState(
            {dataPeliculas: data.results}
        ))
        .catch(error => console.log('el error fue '+ error ))
    }

    render(){
        return(
            <React.Fragment> 
                <div>
                    <h2 className="TituloC">Movies</h2>
                </div>
                <section className='card-container'>
                    {this.state.dataPeliculas.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title} descripcion={unPelicula.overview}/>)}
                    {/* nuevo estado de favoritos con la info de localstorage */}
                </section>
            </React.Fragment>
        )
            
    }
    }

 export default TodasPeliculas;