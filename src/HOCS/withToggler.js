// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it

import React, { Component } from 'react';

class Toggler extends Component {
  state = {
    on: this.props.defaultOnValue,
  };
  
  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on,
      };
    });
  };

  render() {
    const Component = this.props.component;
    return (
      <Component on={this.state.on} toggle={this.toggle} {...this.props} />
    );
  }
}

export function withToggler(component, optionsObj) {
  return function (props) {
    return (
      <Toggler
        component={component}
        defaultOnValue={optionsObj.defaultOnValue}
        {...props}
      />
    );
  };
}
