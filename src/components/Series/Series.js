import React, {Component} from "react";
import SerieCard from "../SerieCard/SerieCard";


class Series extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }

    componentDidMount( ){
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c ")
        .then(response =>response.json())
        .then(data => this.setState(
            {data: data.results}
        ))
        .catch(error => console.log('el error fue '+ error ))
    }

    render(){
        return(
            <React.Fragment> 
                <div>
                    <h2 className="TituloC">Series</h2>
                </div>
                <section className='card-container'>
                    {this.state.data.map((unSeries, idx )=> <SerieCard key={unSeries + idx} data={unSeries}  image={unSeries.poster_path} title={unSeries.name}/>)}
                </section>
            </React.Fragment>
        )
            
    }
    }

    export default Series;