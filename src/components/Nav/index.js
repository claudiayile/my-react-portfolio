import React from 'react';

function Nav(){
    return (
        <section className="col-sm-6">
        <h3>Claudia Yile</h3>
        <ul className="nav-bar">
        <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
        <li id="nav-titles">About</li>   
        </a>    
        <a data-testid="about" href="#portfolio" onClick={() => handleClick("Portfolio")}>
        <li id="nav-titles">Portfolio</li>
        </a>
        <a data-testid="about" href="#Contact" onClick={() => handleClick("Contact")}></a>
        <li id="nav-titles">Contact Me</li>  
        </a>
        </ul>
        </section>
    );
}
export default Nav;
