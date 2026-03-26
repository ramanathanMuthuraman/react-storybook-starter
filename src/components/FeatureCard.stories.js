import FeatureCard from './FeatureCard';

const meta = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  parameters: {
    backgrounds: {
      default: 'Canvas',
    },
  },
  args: {
    title: 'Storybook-ready component',
    description: 'Use this story as a starting point for your own React components and UI states.',
    tag: 'Docs',
    tone: 'default',
  },
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: ['default', 'highlight'],
    },
  },
};

export default meta;

export const Default = {};

export const Highlight = {
  args: {
    title: 'Highlighted variant',
    description: 'Stories make it easy to keep variants visible while you iterate on styling and behavior.',
    tag: 'Variant',
    tone: 'highlight',
  },
};
