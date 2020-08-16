import React from 'react';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

import styles from './Default.css';

class Default extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Header></Header>
        <div className={styles.content}>
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Default;
