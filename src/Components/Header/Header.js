import React, { Component } from 'react'
import './Header.css'
class Header extends Component {

<h1>gt</h1>
    render() {


        function navSlide() {
            const burger = document.querySelector(".burger");
            
            const nav = document.querySelector("#menu .nav-links");
            const navLinks = document.querySelectorAll("#menu .nav-links li");
            console.log(navLinks);
            
            //Toggle Nav
            nav.classList.toggle("nav-active");
    
            //Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ""
                    document.documentElement.style.overflow = 'auto';  // firefox, chrome
                    document.querySelector(".container-fluid").style.marginTop = "40px";
                    document.body.scroll = "yes"; // ie only
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.5}s`;
                    document.documentElement.style.display = 'block';  // firefox, chrome
                    document.querySelector(".container-fluid").style.marginTop = "530px";
                    document.body.scroll = "yes"; // ie only
                }
            });
                
            //Burger Animation
            burger.classList.toggle("toggle");
      
        }

        return (

            <div className="topnav">


                <div id="logo">
                    <img className="ImageNSVLogo" alt="NSV" src={window.location.origin + '/img/logo.png'} />

                </div>

                <div className="burger" onClick={navSlide} >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <br></br>

                <nav id="menu">

                    <ul className="nav-links">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#research">Research Institute Projects</a>
                        </li>
                        <li>
                            <a href="#press">Press</a>
                        </li>
                        <li>
                            <a href="#volunteer">Volunteer</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a className="elipse" href="#donate">Donate</a>
                        </li>

                    </ul>

                    <br></br>
                    <br></br>
                </nav>
            </div>
        )
    }

}

export default Header
