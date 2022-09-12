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
    
    }

    cambioSerieButton(e) {
        if(e.target.value === 'movie') {
            this.setState({
                movie: true
            })
        } else {
            this.setState({
                movie: false
            })
        }
    }

render(){
    return(
        <form onSubmit={(event)=>this.evitarSubmit(event)}> 
        <input placeholder='Search' />
        <label className='radio-button'>Movies</label>
        <input  onChange={(event)=> this.cambioSerieButton(event)}  type="radio" name="media" value="movie" checked/>

        <label className='radio-button'>Series</label>
        <input onChange={(event)=> this.cambioSerieButton(event)}  type="radio" name="media" value="serie" />
        <button type="submit" > Buscar</button>
        </form>
    )
}

}

export default Buscador; 
