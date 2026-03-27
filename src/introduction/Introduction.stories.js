import IntroductionPage from './IntroductionPage';

const packageJson = require('../../package.json');

const meta = {
  title: 'Introduction/Overview',
  component: IntroductionPage,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
    backgrounds: {
      default: 'Canvas',
    },
  },
  args: {
    title: 'XYZ Component Storybook',
    summary:
      'Use this Storybook as the shared entry point for browsing components, checking variations, and validating styling decisions before wiring them into the app.',
    version: `v${packageJson.version}`,
    highlights: [
      'React + Webpack starter with Storybook support',
      'Styled-components driven UI examples in plain JavaScript',
      'Shared color tokens from a single theme source',
    ],
    commands: [
      { label: 'App', value: 'npm start' },
      { label: 'Storybook', value: 'npm run storybook' },
      { label: 'Static build', value: 'npm run build-storybook' },
    ],
  },
};

export default meta;

export const Overview = {};
