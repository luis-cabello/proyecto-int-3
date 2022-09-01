import React, {Component} from "react";

class  PeliculaCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            value:""
        }
    }

    render(){
        return(
        <article className='character-card'>
            <h2>{this.props.name}</h2>  
            <img src={this.props.image} alt=""/>
            <p className='more'>Ver más</p>               
        </article>
           
        )
    }
} 

export default PeliculaCard;
