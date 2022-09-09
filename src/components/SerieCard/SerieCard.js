import React, {Component} from "react";
import {Link} from 'react-router-dom';

class SerieCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            favsMessage: 'Agregar a favoritos',
            verMas: 'Ver Mas',
        }
    }
    verMas(){
        if(this.state.verMas === 'Ver Mas'){
          this.setState({
            verMas:'Ver Menos'
          })
        } else {
          this.setState({
            verMas:'Ver Mas'
          })
        }
      }
agregarYQuitarDeFavoritos(id){
    // Tiene que agregar un id dentro de un Array y guardarlo en localstorgae
    // Si el id ya existe ofrecer al usarlo la posibilidad de quitar el id del array de favoritos
    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritos')

    if(recuperoStorage !== null){
        let favoritosToArray = JSON.parse(recuperoStorage)
        favoritos = favoritosToArray
    }

    if(favoritos.includes(id)){
    favoritos = favoritos.filter(unId => unId !== id)
    this.setState ({
        favsMessage: 'Quitar de favoritos'
    })
    } else {
        favoritos.push(id);
        this.setState ({
            favsMessage: 'Agregar a favoritos'
        })
    }

    let favsAsString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsAsString)
    console.log(localStorage);

}

    render(){
        return(
        <article className='character-card'>
            
            <h2>{this.props.title}</h2>  
            <Link to={`/serie/id/${this.props.data.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""/>
            </Link>
            <article className={this.state.verMas}>
            <p className='more'>{this.props.descripcion}</p>  
            </article>    
            <button className="button-54" onClick={() => this.agregarYQuitarDeFavoritos(this.props.data.id)}> {this.state.favsMessage} </button> 
            <button className="button-54" onClick={() => this.verMas()}>{this.state.verMas}</button>        
        </article>
        )
    }
} 

export default SerieCard;


// import React, {Component} from "react";

// class  SerieCard extends Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             value:""
//         }
//     }

//     render(){
//         return(
//         <article className='character-card'>
//             <h2>{this.props.title}</h2>  
//             <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""/>
//             <p className='more'>Detalle</p>               
//         </article>
           
//         )
//     }
// } 

// export default SerieCard;
