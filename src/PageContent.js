import React, { Component } from 'react';
import {ThemeContext} from './contexts/ThemeContext';

class PageContent extends Component {
  static contextType = ThemeContext;
  render() { 
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? 'black' : 'white',
      height: '100vh',
      width: '100vw'
    }
    return ( 
      <div styles={styles}>
        {this.props.children}
      </div>
    );
  }
}

export default PageContent;