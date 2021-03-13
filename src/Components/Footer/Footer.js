import React, { Component } from 'react'
// import { MenuItems } from "./MenuItem"
// import './Navbar.css'
import './Footer.css'
class Footer extends Component {

 

    render() {
        return(
           
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
        )
    }

}

export default Footer