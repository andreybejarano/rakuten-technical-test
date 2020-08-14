import React from 'react';
import { connect } from 'react-redux';

import styles from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1 variant="h1">Home</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Home);
