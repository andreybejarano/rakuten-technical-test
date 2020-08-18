import React from 'react';
import PropTypes from 'prop-types';

import CardList from './CardList';
import Text from 'Components/Text';

import styles from './CarouselList.css';

class CarouselList extends React.Component {
  static propTypes = {
    list: PropTypes.object,
    onSelectContent: PropTypes.func
  }

  static defaultProps = {
    onSelectContent: () => null
  }

  wrap = null;

  state = {
    translateTo: 0
  }

  /** Child context types. Note: These object keys must be initialized by method getChildContext() */
  static childContextTypes = {
    CarouselListComponent: PropTypes.object
  }

  /**
   * Method inicializer Child Context
   */
  getChildContext() {
    return { CarouselListComponent: this };
  }

  handlerScrollWrap = (direction) => {
    const { children } = this.wrap;

    const translateToResolver = {
      left: () => this.state.translateTo + 1,
      right: () => this.state.translateTo - 1
    };

    let translateTo = 0;

    translateTo = translateToResolver[direction]();

    for (let index = 0; index < children.length; index++) {
      children[index].style.transform = `translateX(${translateTo * 100}%)`;
    }
    this.setState({ translateTo });
  }

  handleSelectedContent(content) {
    this.props.onSelectContent(content);
  }

  render() {
    const { list } = this.props;
    return (
      <div className={styles.root}>
        <Text className={styles.name} variant="h5">{list.name}</Text>
        {(this.state.translateTo !== 0) &&
          <div className={styles.leftArrow} onClick={() => this.handlerScrollWrap('left')}>
            <i className="material-icons">
              keyboard_arrow_left
            </i>
          </div>
        }
        <div ref={wrap => { this.wrap = wrap; }} className={styles.wrap}>
          {
            list.contents.data.map((content, key) =>
              <CardList
                contentSelected={this.handleSelectContent}
                content={content}
                key={key}
              ></CardList>
            )
          }
        </div>
        {(list.contents.data && list.contents.data.length > 0) &&
          <div className={styles.rightArrow} onClick={() => this.handlerScrollWrap('right')}>
            <i className="material-icons">
              keyboard_arrow_right
            </i>
          </div>
        }
      </div>
    );
  }
}

export default CarouselList;
