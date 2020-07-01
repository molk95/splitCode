import React, { Component } from "react";

export default function asyncComponent(importComponent) {
  class AcyncConponent extends Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component,
      });
    }
    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
