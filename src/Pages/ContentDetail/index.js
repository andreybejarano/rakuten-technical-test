import React from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';

import Loader from 'Components/Loader';
import Text from 'Components/Text';
import Trailer from 'Components/Trailer';

import { getMovie } from '@/store/actions/movie';
import { getStreaming, resetStreaming } from '@/store/actions/streaming';

import styles from './ContentDetail.css';

class ContentDetail extends React.Component {
  state = {
    openTrailer: false
  }

  componentDidMount() {
    const {
      contentSelected,
      dispatch,
      match: { params: { id } }
    } = this.props;
    if (!contentSelected.data || contentSelected.data.id !== id) {
      dispatch(getMovie(id));
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(resetStreaming());
  }

  getAudios = (data) => {
    const [stream] = data;
    return (
      stream &&
      <div className={styles.languages}>
        {(stream.audio_languages && stream.audio_languages.length > 0) &&
          <div className={styles.audios}>
            <Text variant="h6">Audio</Text>
            {stream.audio_languages.map((audio, key) =>
              <Text key={key}>{audio.name}</Text>
            )}
          </div>
        }
        {(stream.subtitle_languages && stream.subtitle_languages.length > 0) &&
          <div className={styles.subtitles}>
            <Text variant="h6">Subtítulos</Text>
            {stream.subtitle_languages.map((subtitle, key) =>
              <Text key={key}>{subtitle.name}</Text>
            )}
          </div>
        }
      </div>
    );
  }

  handlerCloseTrailer = () => {
    this.setState({ openTrailer: !this.state.openTrailer });
  }

  handlerTrailer = async (id) => {
    const { dispatch, streaming } = this.props;

    if (!streaming.data) {
      await dispatch(getStreaming(id));
    }

    this.setState({ openTrailer: !this.state.openTrailer });
  }

  render() {
    const { contentSelected, streaming } = this.props;
    return (
      <div className={styles.root}>
        {(contentSelected.isFetching) &&
          <div className={styles.containerLoader}>
            <Loader></Loader>
          </div>
        }
        {contentSelected.data &&
          <React.Fragment>
            <div
              className={styles.containerPlayer}
              style={{
                backgroundImage: `url(${contentSelected.data.images.snapshot})`
              }}
            >
              {streaming.isFetching
                ? <Loader className={styles.loader}></Loader>
                : <div
                  className={styles.playTrailer}
                  onClick={() => this.handlerTrailer(contentSelected.data.id)}
                >
                  <i className="material-icons">play_circle_filled</i>
                </div>
              }
            </div>
            <div className={styles.info}>
              <div className={styles.metadata}>
                <Text variant="h6">
                  <i className="material-icons">supervisor_account</i>
                  {contentSelected.data.classification.name}
                </Text>
                <Text variant="h6">
                  <i className="material-icons">watch_later</i>
                  {contentSelected.data.duration} minutos
                </Text>
                <Text variant="h6">
                  <i className="material-icons">event_note</i>
                  {contentSelected.data.year}
                </Text>
                <Text variant="h6">
                  <i className="material-icons">flag</i>
                  {contentSelected.data.countries.map(country => country.name)}
                </Text>
                <Text variant="h6">
                  <i className="material-icons">info</i>
                  Titulo original: {contentSelected.data.original_title}
                </Text>
              </div>
              <div className={styles.plot}>
                <Text variant="body1">
                  {contentSelected.data.plot}
                </Text>
              </div>
              <div className={styles.containerLanguages}>
                <Text variant="h6">
                  <i className="material-icons">language</i>Idiomas y subtítulos
                </Text>
                {this.getAudios(contentSelected.data.view_options.private.streams)}
              </div>
              <div className={styles.cast}>
                <Text variant="h6">
                  <i className="material-icons">groups</i>Dirección y reparto
                </Text>
              </div>
            </div>
            <Trailer
              className={ClassNames({
                [styles.trailer]: true,
                [styles.showTrailer]: this.state.openTrailer
              })}
              poster={contentSelected.data.images.snapshot}
              src={(streaming.data && this.state.openTrailer)
                ? streaming.data.stream_infos[0].url
                : null}
              onClose={this.handlerCloseTrailer}
            ></Trailer>
          </React.Fragment>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contentSelected: state.movie.selected,
  streaming: state.streamings.selected
});

export default connect(mapStateToProps)(ContentDetail);
