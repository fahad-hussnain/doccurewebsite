import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchImage  from '../../../assets/images/search-img.png';

class homeSearch extends Component{
    render(){
        return(
            <section className="search-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-8">
              <div className="search-box">
                <h2>Search Doctor, <br />Make an Appointment !</h2>
                <div className="form-col">
                  <form action="/template-cardiology/patient/search-doctor">
                    <ul className="d-flex flex-wrap">
                      <li>
                        <input type="text" placeholder="Location" className="form-control" />
                      </li>
                      <li>
                        <input type="text" placeholder="Gender" className="form-control" />
                      </li>
                      <li>
                        <input type="text" placeholder="Phone Number" className="form-control" />
                      </li>
                      <li>
                        <input type="submit" defaultValue="Search" className="btn-submit form-control" />
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
            </div>
          </div>
        </div>
        <div className="search-right-img">
          <img src="https://template.doccure.io/reactjs/template-cardiology/217385fbe4576efea6f9db603381436c.png" alt="" />
        </div>
      </section>
        );
    }
}

export default homeSearch;
	
    