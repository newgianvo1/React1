

import React from 'react'
import './Header.css'
import './Responsive.css'
const Body = () => {
    function navSlide() {
        const burger = document.querySelector(".burger");
        
        const nav = document.querySelector("#menu .nav-links");
        const navLinks = document.querySelectorAll("#menu .nav-links li");
        console.log(navLinks);
        burger.addEventListener("click", () => {
            //Toggle Nav
            nav.classList.toggle("nav-active");

            //Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ""
                    document.documentElement.style.overflow = 'auto';  // firefox, chrome
                    document.body.scroll = "yes"; // ie only
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
                    document.body.scroll = "no"; // ie only
                }
            });
            //Burger Animation
            burger.classList.toggle("toggle");
        });
    }
    // navSlide();
    return (
        <main>


            <div className="topnav">


                <div id="logo">
                    <img className="ImageNSV" alt="NSV" src={window.location.origin + '/img/logo.png'} />

                </div>

            <h1>a</h1>
                <div  className="burger" onClick={navSlide} >
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


            <section className="container-fluid" >
                <div className="rowImg">

                    <img className="ImageNSV1" alt="NSV" width={"160px"} src={window.location.origin + '/img/icon.png'} />

                </div>

            </section>

            <section className="main_container">
                <div>
                    <h1>Research Institute Projects</h1>
                </div>

                {/*************************/
           /*       Lantern         */
           /*************************/}


                <div className="odd" >
                    <ul className="first">
                        <li><h5>Lantern</h5></li>
                        <li><p>Designed for parents,teachers and school counselors</p></li>
                        <li><button type="button" className="btn btn-secondary">Open Tool</button></li>
                    </ul>

                    <ul className="second">
                        <li>
                            <p>Have you seen behavioural changes in your child or student and want
                            to know which type of violence those behaviors might trigger?</p>
                        </li>
                    </ul>
                </div>

                {/*************************/
               /*        Athena         */
               /*************************/}

                <div className="even" >
                    <ul className="first">
                        <li><h5>Athena</h5></li>
                        <li><p>Designed for teachers, school counselors, administrators, law enforcement
                          and researchers/policy analyst.</p></li>
                        <li><button type="button" className="btn btn-secondary">Open Tool</button></li>
                    </ul>

                    <ul className="second">
                        <li>
                            <p>Discover school violence patterns. Explore how 451 school shooting communities,shooting incidents,police reports,shooter behaviors,shooter
                            medical histories, and school structures, provide reduction insight and strategies</p>
                        </li>
                    </ul>
                </div>

                {/*************************/
               /*  Covid School Rentry  */
               /*************************/}

                <div className="odd" >
                    <ul className="first">
                        <li><h5>COVID School Rentry</h5></li>
                        <li><p>Designed to prepare schools for post-COVID schoool violence</p></li>
                        <li><button type="button" className="btn btn-secondary">Open Tool</button></li>
                    </ul>

                    <ul className="second">
                        <li><p>Explore the history of children who return to school after
                        sudden emergency withdrawals and experience new levels and types of "adjustments" violence.
                        Parents and schools knowing what to expect and having good interventions
                        ready can reduce school violence</p></li>
                    </ul>
                </div>

                {/*************************/
               /*  Language of violence */
               /*************************/}

                <div className="even" >
                    <ul className="first">
                        <li><h5 className="TagLanguage">Language of Violence</h5></li>
                        <li><p>Designed to provide insights into what correlations between schools shooters
                      and violent domestic organization mean.</p></li>
                        <li><button type="button" className="btn btn-secondary">Open Tool</button></li>
                    </ul>

                    <ul className="second">
                        <li><p>Explore language patterns of 451 school shooters,including what they say,
                        how they say it , and the group language of those shooters identify with including
                      Domestic terrorists, white nationalists, and 940 hate groups (SPLC).</p></li>
                    </ul>
                </div>

            </section>



            <div className="container-fluid-footer" >


                <div className="row text-white font-weight-bold text-center pt-3 pb-4">
                    <div className="col-12  col-lg-3 col-md-3  border-right footer">

                        <p>NoSchoolViolence</p>
                        <p>Seattle | Washington</p>

                    </div>
                    <div className="col-12 col-lg-3 col-md-3    border-right footer">
                        <a className="text-white" href="#"><p>Research Institute of project</p></a>

                    </div>
                    <div className="col-12  col-lg-3 col-md-3   border-right footer">
                        <a className="text-white" href="#"><p className="text-green">Press</p></a>
                    </div>
                    <div className=" col-12 col-xs-12  col-lg-3 col-md-3   footer">

                        <a className="text-white" ><p>Action</p></a>
                        <a className="text-white" href="#"><p>Volunteer</p></a>
                        <a className="text-white" href="#"><p>Contact</p></a>
                        <a className="text-white" href="#"><p>Donate</p></a>

                    </div>


                </div>

                <div className="col-12 text-center text-white font-weight-bold pb-4">



                    <div className="col-md-12">


                        <div className="pull-right flip social-media " role="navigation">
                            <ul className="nav-list-inline">
                                <li className="list-inline-item facebook">
                                    <a href="https://www.facebook.com/noschoolviolence.org/">
                                        <i className="text-white fab fa-facebook-f"></i>

                                    </a>
                                </li>

                                <li className="list-inline-item instagram">
                                    <a href="https://www.instagram.com/noschoolviolence/">
                                        <i className="text-white fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item twiter">
                                    <a href="https://twitter.com/NoScholViolence">
                                        <i className="text-white fab fa-twitter"></i>
                                    </a>
                                </li>

                                <li className="list-inline-item linkedin">
                                    <a href="https://www.linkedin.com/company/noschoolviolence-org">
                                        <i className=" text-white fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-12 text-center text-white">
                        <p>contact@NoSchoolViolence.org</p>
                    </div>

                    <span>Copyright 2021 - All rights reserved</span>

                </div>

            </div>


        </main>
    );


}

export default Body;
