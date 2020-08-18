import React from 'react';
import { connect } from 'react-redux';

import CarouselList from 'Components/CarouselList';
import Loader from 'Components/Loader';

import { getAllLists } from '@/store/actions/list';

import styles from './Home.css';

class Home extends React.Component {
  componentDidMount() {
    const { dispatch, lists } = this.props;
    if (!lists.data) {
      dispatch(getAllLists());
    }
  }

  onSelectContent = (content) => {
    const { history } = this.props;
    history.push(`/content-detail/${content.id}`);
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
        <div className={styles.containerList}>
          {lists.success &&
          lists.data.map((item, key) =>
            item.list &&
            <CarouselList
              key={key}
              list={item.list}
              onSelectContent={this.onSelectContent}
            ></CarouselList>
          )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.list.all
});

export default connect(mapStateToProps)(Home);
