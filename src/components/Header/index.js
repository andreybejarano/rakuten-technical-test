import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.root}>
        <Link to="/">
          <img className={styles.logo} src={'/statics/images/logo.svg'}></img>
        </Link>
      </header>
    );
  }
}

export default Header;
