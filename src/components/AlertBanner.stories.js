import AlertBanner from './AlertBanner';

const meta = {
  title: 'Components/AlertBanner',
  component: AlertBanner,
  parameters: {
    backgrounds: {
      default: 'Canvas',
    },
  },
  args: {
    title: 'Ready for review',
    message: 'This second sample story makes the sidebar ordering easier to see while you add more components.',
    tone: 'info',
  },
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: ['info', 'success'],
    },
  },
};

export default meta;

export const Info = {};

export const Success = {
  args: {
    title: 'Published successfully',
    message: 'Use this variation for positive confirmations, release notes, or any lightweight status message.',
    tone: 'success',
  },
};
