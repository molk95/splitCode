import React, { Component } from "react";
import "./App.css";

import Home from "../components/Home";
import Services from "../components/Services";
import About from "../components/About";

class App extends Component {
  state = {
    route: "Home Page",
    component:''
  };

  onRouteChange = (route) => {
    // No Code Splitting
    // this.setState({
    //   route: route,
    // });


    // With Code Splitting
if (route === 'Home Page') {
  this.setState({
    route:route
  })
}else if (route==='Services Page') {
  import('./com')
}
  };

  render() {
    // if (this.state.route === "Home Page") {
    //   return <Home onRouteChange={this.onRouteChange} />;
    // } else if (this.state.route === "About Page") {
    //   return <About onRouteChange={this.onRouteChange} />;
    // } else if (this.state.route === "Services Page") {
    //   return <Services onRouteChange={this.onRouteChange} />;
    // }
    if (this.state.route==='Home Page') {
      return <Home onRouteChange={this.onRouteChange}
    } else {
      return <globalThis.state.component onRouteChange={this.onRouteChange} />
    }
  }
}

export default App;
