import React, {Component} from "react";

//Todo
//1) Transformar el componente en un componente con estado.
//2) Recuperar el id de la ruta.
//3) Pedir datos al endpoint de la api de Rick & Morty con el id recuperado y mostrar los datos en pantalla.


class detallePelicula extends Component{
    constructor(props){
        super(props);
        this.state ={
            favsMessage: 'Agregar a favoritos',
            id: this.props.match.params.id,
            dataPelicula: {},
        }
    }

    componentDidMount(){
        let recuperoStorage = localStorage.getItem('favoritosPelis');
        let favoritos = JSON.parse(recuperoStorage);
        console.log(favoritos);

        if (favoritos !== null){
            if (favoritos.includes(parseInt(this.state.id))) {
                this.setState({
                    favsMessage: 'Quitar de favoritos'
                })
            }
            console.log(this.state.id);
        }
        // const id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
        .then(response => response.json())
        .then(data => this.setState(
            {dataPelicula: data}
        ))
        .catch(error => console.log('el error fue '+ error ))
            
        //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    }


    agregarYQuitarDeFavoritos(id) {
        // Tiene que agregar un id dentro de un Array y guardarlo en localstorgae
        // Si el id ya existe ofrecer al usarlo la posibilidad de quitar el id del array de favoritos
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritosPelis') //Hay algo en localStorage?

        if (recuperoStorage !== null) { //Si hay algo disinto de null osea hay algo en favoritos
            let favoritosToArray = JSON.parse(recuperoStorage) // Devolvemelo y pasalo a JSON
            favoritos = favoritosToArray //lo guardamos en el array 
        }

        if (favoritos.includes(id)) { //Si el id que se encontro arriba esta incluido en el  Array
            favoritos = favoritos.filter(unId => unId !== id) // Agarra el array si matchea con el id que el usaurio eligio, se cambia el estado a Quitar 
            this.setState({
                favsMessage: 'Agregar a favoritos '
            })
        } else {
            favoritos.push(id); //Si no esta en el array se va a cambiar el estado a agregar. 
            this.setState({
                favsMessage: 'Quitar de favoritos'
            })
        }

        let favsAsString = JSON.stringify(favoritos);
        localStorage.setItem("favoritosPelis", favsAsString)
        console.log(localStorage);

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
                    <p className="letrablanca"> Descripcion : {this.state.dataPelicula.overview}</p>
                    <p className="letrablanca"> Voto promedio de los espectadores : {this.state.dataPelicula.vote_average}</p>
                    <p className="letrablanca"> Fecha de lanzamiento : {this.state.dataPelicula.release_date}</p>
                    <p className="letrablanca"> Genero : {this.state.dataPelicula.genre_ids}</p>
                    <button className="button-54" onClick={() => this.agregarYQuitarDeFavoritos(parseInt(this.state.id))}> {this.state.favsMessage} </button>
                </article>
                </section>
            </React.Fragment>
        )
    }
} 


export default detallePelicula;





