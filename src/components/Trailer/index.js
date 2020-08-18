import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import styles from './Trailer.css';

class Trailer extends React.Component {
  video = null;

  static propTypes = {
    className: PropTypes.string,
    poster: PropTypes.string,
    src: PropTypes.string,
    onClose: PropTypes.func
  }

  static defaultProps = {
    onClose: () => null
  }

  handlerClose = () => {
    this.video.pause();
    this.video.currentTime = 0;
    this.props.onClose();
  }

  render() {
    const { className, poster, src } = this.props;
    return (
      <div className={ClassNames({
        [styles.root]: true,
        [className]: typeof className === 'string'
      })}>
        <div className={styles.close} onClick={this.handlerClose}>
          <i className="material-icons">close</i>
        </div>
        <video
          ref={video => { this.video = video; }}
          autoPlay
          controls
          poster={poster}
          src={src}
        >
        </video>
      </div>
    );
  }
}

export default Trailer;
