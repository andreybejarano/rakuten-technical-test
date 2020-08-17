import React from 'react';

import styles from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.root}>
        <img className={styles.logo} src={'/statics/images/logo.svg'}></img>
      </header>
    );
  }
}

export default Header;
