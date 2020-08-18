import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Text from 'Components/Text';

import styles from './Header.css';

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaulProps = {
    title: null
  }

  render() {
    const { title } = this.props;
    return (
      <header className={styles.root}>
        <Link to="/">
          <img className={styles.logo} src={'/statics/images/logo.svg'}></img>
        </Link>
        {title &&
        <div className={styles.title}>
          <Text variant="h4">{title}</Text>
        </div>
        }
      </header>
    );
  }
}

export default Header;
