import React, {Component} from "react";

class Buscador extends Component{
    constructor(props){
        super(props);
        this.state = {
          value:""
        }
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    controlarCambios(event){
        this.setState({value:event.target.value});
    }

    filtrarPeliculas(){

    }



render(){
    return(
        <form className="Buscador" onSubmit={(event)=> this.evitarSubmit(event)}> 
        <input type= "search" onChange={(event)=> this.controlarCambios(event)} value={this.state.value}/>
        <input type="submit" />
        </form>
    )
}

}

export default Buscador; 
