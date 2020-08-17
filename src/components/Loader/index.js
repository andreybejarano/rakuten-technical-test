import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Loader.css';

class Loader extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props;
    const classes = ClassNames({
      [styles.root]: true,
      [className]: typeof className === 'string'
    });
    return (
      <div className={classes}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          height="100"
          width="100"
          viewBox="0 0 75 75"
        >
          <circle cx="37.5" cy="37.5" r="33.5" strokeWidth="8" />
        </svg>
      </div>
    );
  }
}

export default Loader;
