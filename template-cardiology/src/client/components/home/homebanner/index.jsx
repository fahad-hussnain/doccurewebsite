import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HomeBookDoctor extends Component{
    
    render(){
       
        return(
      <section className="section section-banner">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
          </div>
          <div className="col-12 col-md-6">
            <div className="banner-wrapper">
              <div className="banner-header">
                <h5>Be Hear Healthy</h5>
                <h1>Lorem Ipsum <br /><span>simply simply simply</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indstandard dummy text ever</p>
                <div className="btn-col">
                  <ul>
                    <li><Link to="/patient/search-doctor" className="btn btn-fill">Read More</Link></li>
                    <li><Link to="/login" className="btn btn-notfill">Contact Us</Link></li>
                  </ul>
                </div>
              </div>	
            </div>
          </div>
        </div>
      </div>
    </section>
        );
    }
}
export default HomeBookDoctor;