import React from "react";
import ReactDOM from "react-dom";

export default class Home extends React.Component {
  render() {
    return this.props.children || (
     <div> 
      <div>
        <nav class="navbar navbar-light bg-faded">
          <ul class="nav navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <div> 
        <h1>Home Page</h1>
        <h2>The best freaking home page ever!</h2>
        <div><button type="button" class="btn btn-primary btn-lg active">Primary button</button></div>
      </div>
    </div>
    );
  }
}
