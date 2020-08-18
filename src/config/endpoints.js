import env from './env';

export default {
  list: `${env.api.rakuten.basePath}/lists/:list?classification_id=5&device_identifier=web&locale=es&market_code=es`,
  movie: `${env.api.rakuten.basePath}/movies/:id?classification_id=5&device_identifier=web&locale=es&market_code=es`,
  streamings: `${env.api.rakuten.basePath}/me/streamings?classification_id=5&device_identifier=web&locale=es&market_code=es`
};
