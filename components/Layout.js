import React, { Component } from 'react';
import { NavMenu } from '../components/AppHeader/NavMenu';
import { AppHeader } from "./AppHeader/index";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="app-Layout">
        <AppHeader />
        <NavMenu />
        {this.props.children}
      </div>
    );
  }
}
