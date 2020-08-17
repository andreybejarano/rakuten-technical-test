import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import styles from './CardList.css';

class CardList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    content: PropTypes.object
  }

  render() {
    const { className, content } = this.props;
    return (
      <div
        className={ClassNames({
          [styles.root]: true,
          [className]: typeof className === 'string'
        })}
        style={{
          backgroundImage: `url(${content.images.artwork}`
        }}
      ></div>
    );
  }
}

export default CardList;
