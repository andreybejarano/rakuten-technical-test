import React from 'react';

import styles from './Footer.css';
import Text from 'Components/Text';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.root}>
        <Text variant="body1" className={styles.text}>
          Created by Erik Andrey Bejarano Sánchez
        </Text>
        <img className={styles.logo} src={'/statics/images/logo.svg'}></img>
      </footer>
    );
  }
}

export default Footer;
