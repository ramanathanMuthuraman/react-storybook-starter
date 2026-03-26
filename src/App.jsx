import FeatureCard from './components/FeatureCard';
import {
  AppShell,
  CardGrid,
  Eyebrow,
  GlobalStyle,
  Hero,
  HeroCopy,
  HeroTitle,
} from './App.style';

const highlights = [
  {
    title: 'Webpack-powered development',
    description: 'Hot reloading, JSX support, and production bundles are configured out of the box.',
    tag: 'Build',
  },
  {
    title: 'Storybook for isolated UI work',
    description: 'Preview and document components without wiring them into the full application first.',
    tag: 'Preview',
  },
  {
    title: 'JavaScript-only setup',
    description: 'Everything is plain JS and JSX, so you can start quickly without TypeScript overhead.',
    tag: 'JS',
  },
];

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppShell>
        <Hero>
          <Eyebrow>Sample Starter</Eyebrow>
          <HeroTitle>React + Webpack + Storybook</HeroTitle>
          <HeroCopy>
            This starter gives you a simple React application, a custom Webpack pipeline, and Storybook support for building UI pieces in isolation.
          </HeroCopy>
        </Hero>

        <CardGrid aria-label="Project highlights">
          {highlights.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              tag={item.tag}
            />
          ))}
        </CardGrid>
      </AppShell>
    </>
  );
}
