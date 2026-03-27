/** @type { import('@storybook/react-webpack5').StorybookConfig } */
module.exports = {
  title: 'Component Storybook',
  stories: [
    '../src/introduction/Introduction.stories.js',
    '../src/components/AlertBanner.stories.js',
    '../src/components/FeatureCard.stories.js',
  ],
  staticDirs: [
    '../public',
    { from: '../assets', to: '/assets' },
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react-webpack5',
  features: {
    sidebarOnboardingChecklist: false,
  },
};
