/* Layout component */

// imports
import React, { Fragment } from 'react';
import Header from '../Header';
import GlobalStyle from '../GlobalStyle';
import { Content } from './styled';
import Footer from "../Footer";

// layout content
export default class Layout extends React.Component{
  render() {
    return (
      <Fragment>

        {/* Global CSS styles */}
        <GlobalStyle />

        {/* Header */}
        <Header />

        {/* page content */}
        <Content>{this.props.children}</Content>

        {/* Footer */}
        <Footer />

      </Fragment>
    );
  }
}
