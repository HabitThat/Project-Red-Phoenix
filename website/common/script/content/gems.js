const blocks = {
  '4gems': {
    gems: 4,
    iosProducts: ['com.phoenixlounge.ios.Accomplay.4gems'],
    androidProducts: ['com.phoenixlounge.android.accomplay.iap.4gems'],
    price: 99, // in cents, web only
  },
  '21gems': {
    gems: 21,
    iosProducts: [
      'com.phoenixlounge.ios.Accomplay.20gems',
      'com.phoenixlounge.ios.Accomplay.21gems',
    ],
    androidProducts: [
      'com.phoenixlounge.android.accomplay.iap.20.gems',
      'com.phoenixlounge.android.accomplay.iap.21.gems',
    ],
    price: 499, // in cents, web only
  },
  '42gems': {
    gems: 42,
    iosProducts: ['com.phoenixlounge.ios.Accomplay.42gems'],
    androidProducts: ['com.phoenixlounge.android.accomplay.iap.42gems'],
    price: 999, // in cents, web only
  },
  '84gems': {
    gems: 84,
    iosProducts: ['com.phoenixlounge.ios.Accomplay.84gems'],
    androidProducts: ['com.phoenixlounge.android.accomplay.iap.84gems'],
    price: 1999, // in cents, web only
  },
};

// Add the block key to all blocks
Object.keys(blocks).forEach(blockKey => {
  const block = blocks[blockKey];
  block.key = blockKey;
});

export default blocks;
