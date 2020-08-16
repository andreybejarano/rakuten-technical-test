import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import styles from './Text.css';

class Text extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.node
    ]).isRequired,
    center: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.oneOf([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'caption1',
      'caption2',
      'overline'
    ])
  }

  getTextByVariant(variant = 'body1', children, className) {
    const classes = ClassNames({
      [styles[variant]]: variant,
      [className]: typeof className === 'string',
      [styles.center]: this.props.center
    });
    const elements = {
      h1: (<h1 className={classes}>{children}</h1>),
      h2: (<h2 className={classes}>{children}</h2>),
      h3: (<h3 className={classes}>{children}</h3>),
      h4: (<h4 className={classes}>{children}</h4>),
      h5: (<h5 className={classes}>{children}</h5>),
      h6: (<h6 className={classes}>{children}</h6>),
      subtitle1: (<label className={classes}>{children}</label>),
      subtitle2: (<label className={classes}>{children}</label>),
      body1: (<p className={classes}>{children}</p>),
      body2: (<p className={classes}>{children}</p>),
      caption1: (<span className={classes}>{children}</span>),
      caption2: (<span className={classes}>{children}</span>),
      overline: (<span className={classes}>{children}</span>)
    };
    return elements[variant];
  }

  render() {
    const { variant, children, className } = this.props;
    return (
      <React.Fragment>
        {this.getTextByVariant(variant, children, className)}
      </React.Fragment>
    );
  }
}

export default Text;
