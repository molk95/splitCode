import React, { Component } from "react";
import "./App.css";

import Home from "../components/Home";
// import Services from "../components/Services";
// import About from "../components/About";
import AsyncComponent from '../components/AcyncConponent'

class App extends Component {
  state = {
    route: "Home Page",
    component:null
  };

  onRouteChange = (route) => {
    // No Code Splitting
    this.setState({
      route: route,
    });


    // With Code Splitting
// if (route === 'Home Page') {
//   this.setState({
//     route:route
//   })
// }else if (route==='Services Page') {
//   import('../components/Services').then((Services)=> {
//     this.setState({route:route, component:Services.default})
//   })
// } else if (route === 'About Page') {
//   import('../components/About').then((About)=> {
//     this.setState({route:route, component:About.default})
//   })
// }
  };

  render() {
    if (this.state.route === "Home Page") {
      return <Home onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === "About Page") {
      const AsyncAbout = AsyncComponent(()=> import('../components/About'))
      return <AsyncAbout onRouteChange={this.onRouteChange} />
    } else if (this.state.route === "Services Page") {
      const AsyncServices = AsyncComponent(()=> import('../components/Services'))
      return <AsyncServices onRouteChange={this.onRouteChange} />
    }
    // if (this.state.route==='Home Page') {
    //   return <Home onRouteChange={this.onRouteChange} />
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    // }
  }
}

export default App;
