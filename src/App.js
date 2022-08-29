import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
    

let menu = [
    'Home',
    'Favoritos',
    'Ver Todas',
]

return(
    <React.Fragment>
        <Navbar elementosMenu={menu}/>
        
        <Footer/>
    </React.Fragment>
);
}

export default App;