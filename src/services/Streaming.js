import request from 'Utils/request';

import config from 'Config';

export default class Stream {
  static async getStreaming(id) {
    try {
      const url = config.endpoints.streamings;
      const options = {
        method: 'POST',
        body: {
          audio_language: 'SPA',
          audio_quality: '2.0',
          content_id: id,
          content_type: 'movies',
          device_serial: 'device_serial_1',
          device_stream_video_quality: 'FHD',
          player: 'web:PD-NONE',
          subtitle_language: 'MIS',
          video_type: 'trailer'
        }
      };
      const { data } = await request(url, options);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
