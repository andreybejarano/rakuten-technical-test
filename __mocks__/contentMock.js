module.exports = {
  type: 'movies',
  id: 'sobrevive-esta-noche',
  numerical_id: 127099,
  title: 'Sobrevive esta noche',
  year: 2020,
  duration: 86,
  label: '3,99 €',
  classification: {
    type: 'classifications',
    id: '5',
    numerical_id: 5,
    name: '18',
    age: 18,
    adult:
      false,
    description: 'Mostrar todos los contenidos, excluyendo los clasificados para adultos',
    default: true
  },
  images: {
    artwork: 'https://images-2.wuaki.tv/system/artworks/127099/master/sobrevive-esta-noche-1594366830.png',
    snapshot: 'https://images-0.wuaki.tv/system/shots/224078/original/survive-the-night-1594046326.jpeg',
    ribbons: []
  },
  highlighted_score: {
    score: 4.2,
    amount_of_votes: 50,
    formatted_amount_of_votes: '50',
    site: {
      type: 'sites',
      id: '1',
      numerical_id: 1,
      name: 'IMDb',
      show_image: false,
      scale: 10,
      image: 'https://images-0.wuaki.tv/system/images/1/original/imdb-1594119387.png'
    }
  },
  rating: {
    average: 3,
    scale: 5
  },
  labels: {
    audio_qualities: [
      {
        type: 'audio_qualities',
        id: '2.0',
        numerical_id: 2,
        name: '2.0 (Stereo)',
        abbr: '2.0',
        image: 'https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png'
      }
    ],
    hdr_types: [
      {
        type: 'hdr_types',
        id: 'NONE',
        numerical_id: 1,
        name: 'SDR',
        abbr: 'NONE',
        image: null
      }
    ],
    purchase_types: [
      {
        type: 'purchase_types',
        id: '1',
        numerical_id: 1,
        is_recurring: false,
        name: 'Alquiler 48H',
        label: 'ALQUILER 48H',
        kind: 'rental',
        expires_after_in_seconds: 172800,
        available_time_in_seconds: 172800
      },
      {
        type: 'purchase_types',
        id: '2',
        numerical_id: 2,
        is_recurring: false,
        name: 'Venta (Digital Locker)',
        label: 'VENTA (DIGITAL LOCKER)',
        kind: 'purchase',
        expires_after_in_seconds: null,
        available_time_in_seconds: null
      }
    ],
    video_qualities: [
      {
        type: 'video_qualities',
        id: 'SD',
        numerical_id: 2,
        name: 'SD',
        abbr: 'SD',
        position: 0,
        image: 'https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png'
      },
      {
        type: 'video_qualities',
        id: 'HD',
        numerical_id: 1,
        name: 'HD',
        abbr: 'HD',
        position: 1,
        image: 'https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png'
      }
    ]
  }
};
