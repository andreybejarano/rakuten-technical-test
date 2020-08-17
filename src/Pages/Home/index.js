import React from 'react';
import { connect } from 'react-redux';

import CarouselList from 'Components/CarouselList';
import Loader from 'Components/Loader';

import { getAllLists } from '@/store/actions/list';

import styles from './Home.css';

class Home extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAllLists());
  }

  render() {
    const { lists } = this.props;
    return (
      <div className={styles.root}>
        {lists.isFetching &&
          <div className={styles.containerLoader}>
            <Loader></Loader>
          </div>
        }
        {lists.success &&
          lists.data.map((item, key) =>
            item.list && <CarouselList list={item.list} key={key}></CarouselList>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.list.all
});

export default connect(mapStateToProps)(Home);
