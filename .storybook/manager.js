const { addons } = require('storybook/manager-api');
const { storybookTheme } = require('./storybookTheme');

addons.setConfig({
  theme: storybookTheme,
});

addons.register('component-storybook/default-layout', (api) => {
  setTimeout(() => {
    api.togglePanel(false);
  }, 0);
});
