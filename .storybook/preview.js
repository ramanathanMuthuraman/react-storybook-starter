const { storybookTheme } = require('./storybookTheme');
const colors = require('../src/theme/colors.json');

/** @type { import('@storybook/react-webpack5').Preview } */
module.exports = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'Canvas',
      values: [
        { name: 'Canvas', value: colors.surfaceBase },
        { name: 'Muted Surface', value: colors.surfaceMuted },
        { name: 'Storybook Dark', value: colors.storybookAppBg },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: storybookTheme,
    },
  },
};
