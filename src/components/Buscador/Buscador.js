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

render(){
    return(
        <form className="Buscador" onSubmit={(event)=> this.evitarSubmit(event)}> 
        <label></label>
        <input type= "search" onChange={(event)=> this.controlarCambios(event)} value={this.state.value}/>
        <input type="submit" value="Submit"/>
        </form>
    )
}

}

export default Buscador; 
