const { addons } = require('storybook/manager-api');
const { storybookTheme } = require('./storybookTheme');

addons.setConfig({
  theme: storybookTheme,
});
