import React, {Component} from "react";

class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
            value:""
        }
    }

    render(){
        return(
            <React.Fragment>
                <section className="Header">
                  <h1>Vmovies</h1>
                </section>
            </React.Fragment>
        )
            
    }
}

export default Header;
