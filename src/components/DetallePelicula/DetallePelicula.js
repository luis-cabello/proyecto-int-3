import React, {Component} from "react";

//Todo
//1) Transformar el componente en un componente con estado.
//2) Recuperar el id de la ruta.
//3) Pedir datos al endpoint de la api de Rick & Morty con el id recuperado y mostrar los datos en pantalla.


class detallePelicula extends Component{
    constructor(props){
        super(props);
        this.state ={
            id: this.props.match.params.id,
            dataPelicula: {}
        }
    }

    componentDidMount(){
        // const id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
        .then(response => response.json())
        .then(data => this.setState(
            {dataPelicula: data}
        ))
        .catch(error => console.log('el error fue '+ error ))
            
        
        //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    }

    render(){
        return(
            <React.Fragment>
                <section className="Detalle">
                <article className='character-card'>
                <h2 className="letrablanca">{this.state.dataPelicula.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w342/${this.state.dataPelicula.poster_path}`} alt=""/>
                </article>
                <article className="DetalleDetail">
                    <p className="letrablanca">{this.state.dataPelicula.overview}</p>
                    <p className="letrablanca">{this.state.dataPelicula.vote_average}</p>
                    <p className="letrablanca">{this.state.dataPelicula.release_date}</p>
                    <p className="letrablanca">{this.state.dataPelicula.genre_ids}</p>
                </article>
                </section>
            </React.Fragment>
        )
    }
} 


export default detallePelicula;





