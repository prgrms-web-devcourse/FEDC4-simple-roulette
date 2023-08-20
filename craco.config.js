const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  babel: {
    presets: ['@emotion/babel-preset-css-prop']
  }
};
