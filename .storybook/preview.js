require('../src/theme/themeVariables');

const { previewParameters } = require('./storybookTheme');

/** @type { import('@storybook/react-webpack5').Preview } */
module.exports = {
  parameters: previewParameters,
};
