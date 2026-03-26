/** @type { import('@storybook/react-webpack5').StorybookConfig } */
module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|mjs)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react-webpack5',
};
