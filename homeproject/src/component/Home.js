import React from "react";
const Home = () =>{
    return(
        <div className="hero">
            <div className="card text-bg-dark text-black border-0">
                <img src="/furniture/sofa.jpg" class="card-img" alt="background" height="550px"/>
                <div className="card-img-overlay">
                    <div className="container d-flex flex-column justify-content-around-center">
                    
                    <h5 className="card-title display-3 fw-bolder mb-0">RENT FURNITURES FOR YOUR HOME</h5>
                    <p className="card-text lead fs-2">Check out our products</p>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Home;