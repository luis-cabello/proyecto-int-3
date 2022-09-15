import React, {Component} from "react";

class Buscador extends Component{
    constructor(props){
        super(props);
        this.state = {
          value:"",
          movie: true
        }
    }

    evitarSubmit(event){
        event.preventDefault();
        this.props.buscar()
       
    
    };

    cambioSerieButton(event) {
        if(event.target.value === 'movie') {
            this.setState({
                movie: true
            })
        } else {
            this.setState({
                movie: false
            })
        }
    };

    guardarValue(event){
        this.setState({
            value: event.target.value, 
        })
    };

render(){
    return(
        <form onSubmit={(event)=>this.evitarSubmit(event)}> 
        <input className="filtro" placeholder='Search' onChange={(event)=> this.guardarValue(event)} value={this.state.value}/>
        <label className='radio-button'>Movies</label>
        <input  onChange={(event)=> this.cambioSerieButton(event)}  type="radio" name="media" value="movie" checked/>

        <label className='radio-button'>Series</label>
        <input onChange={(event)=> this.cambioSerieButton(event)}  type="radio" name="media" value="serie" />
        <button type="submit" className="button-54"  onClick={()=>this.props.buscar(this.state.movie , this.state.value)}>  Buscar  </button>
        </form>
    )
}

}

export default Buscador; 
