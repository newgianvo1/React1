

import React from 'react'
import './BodyPage.css'




const Body = () => {
    return ( 
       <div>
        <div className="container-fluid" >
            <div className="row" >
                <div className="col-md-5">

                </div>
                <div className="col-md-3">
             <img className="ImageNSV"  alt="NSV" src={window.location.origin + '/img/icon.jpg'}  />
                </div>
             </div>
           
            
         </div>

          <div className="container">

              <div className="row" >
              <h1 className="ToEditH">Research Institute Projects</h1>

                    <div className="col-md-6">
                        <h5 className="TagLantern">Lantern</h5>
                        <p>Designed for parents,teachers and school counselors
                             <br></br>
                             <br></br>
                             <button type="button" className="btn btn-secondary">Open Tool</button>
                        </p>
                    </div>
                    <div className="col-md-6">
                    <br></br>
            
                    <p>Have you seen behavioural changes in your child or student and want to know which type of violence those behaviors might trigger?</p>
                    </div>
             </div>
             <br></br>
            <br></br> <br></br>
            
             <div className="row" >
               
                <div className="col-md-6">

                <p>Discover school violence patterns.Explore how 451 school shooting communities,shooting incidents,police reports,shooter behaviors,shooter
                     medical histories, and school structures, provide reduction insight and strategies</p>
                </div>
                <div className="col-md-6">
                <h5 className="TagAthena">Athena</h5>
                <p>Designed for teachers,school,counselors,administrators,law enforcement and researchers/policy analyst.</p>
                </div>
             </div>

         <br></br> <br></br>

             <div className="row" >
                    <div className="col-md-6">
                        <h5 className="TagCovid">COVID School Rentry</h5>
                        <p>Designed to prepare schools for post-COVID schoool violence
                             <br></br>
                             <br></br>
                             <button type="button" className="btn btn-secondary">Open Tool</button>
                        </p>
                    </div>
                    <div className="col-md-6">
                    <br></br>
            
                    <p>Explore the history of children who return to school after sudden emergency withdrawals and experience new levels and types of "adjustments" violence.
                        Parents and schools knowing what to expect and having good interventions ready can reduce school violence</p>
                    </div>
             </div>

            <br></br>

             <div className="row" >
               
               <div className="col-md-6">

               <p>Explore language patterns of 451 school shooters,including what they say, how they say it , and the group language of those shooters identify with including
                  Domestic terrorists, white nationalists, and 940 hate groups (SPLC).</p>
               </div>
               <div className="col-md-6">
               <h5 className="TagLanguage">Language of Violence</h5>
               <p>Designed to provide insights into what correlations between schools shooters and violent domestic organization mean.</p>
               </div>
            </div>

          </div>
         </div>
     );
}
 
export default Body;