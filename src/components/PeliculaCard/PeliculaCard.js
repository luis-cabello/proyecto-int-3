import React, { Component } from "react";
import { Link } from 'react-router-dom';
import detallePelicula from "../DetallePelicula/DetallePelicula";

class PeliculaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favsMessage: 'Agregar a favoritos',
            verMas: 'Ver Mas',
        }
    }
    verMas(){
        if(this.state.verMas === 'Ver Menos'){
          this.setState({
            verMas:'Ver Mas'
          })
        } else {
          this.setState({
            verMas:'Ver Menos'
          })
        }
      }

    componentDidMount(){
        let recuperoStorage = localStorage.getItem('favoritos');
        let favoritos = JSON.parse(recuperoStorage);

        if (favoritos !== null ){
            if (favoritos.includes(this.props.data.id)) {
                this.setState({
                    favsMessage: 'Quitar de favoritos'
                })
            }
        }

    }

    agregarYQuitarDeFavoritos(id) {
        // Tiene que agregar un id dentro de un Array y guardarlo en localstorgae
        // Si el id ya existe ofrecer al usarlo la posibilidad de quitar el id del array de favoritos
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos') //Hay algo en localStorage?

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
        localStorage.setItem("favoritos", favsAsString)
        console.log(localStorage);

    }

    render() {
        return (
            <article className='character-card'>

                

                <h2>{this.props.title}</h2>
                <Link to={`/pelicula/id/${this.props.data.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
                </Link>
                <article className={this.state.verMas}>
                <p className='more'>{this.props.descripcion}</p>
                </article>
                <button className="button-54" onClick={() => this.agregarYQuitarDeFavoritos(this.props.data.id)}> {this.state.favsMessage} </button>
                <button className = 'button-54'onClick={() => this.verMas()}>{this.state.verMas}</button>
            </article>
        )
    }
}

export default PeliculaCard;
