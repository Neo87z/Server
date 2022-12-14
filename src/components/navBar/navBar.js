import React, { Component } from 'react';


class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/book-trip">Betcoin Live Admin Panel</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
          
                
                <li className="nav-item">
                  <a className="nav-link" href="/addRoom">Add Bet</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/viewRooms">View Bet</a>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
    )
  }
}

export default Navbar;
