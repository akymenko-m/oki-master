const defaultTheme = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      {
        saturation: -100,
      },
      {
        gamma: 0.5,
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.icon',
    stylers: [
      {
        gamma: 1,
      },
      {
        saturation: 50,
      },
    ],
  },
];

export default defaultTheme;
