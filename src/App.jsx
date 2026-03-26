import FeatureCard from './components/FeatureCard';

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
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Sample Starter</p>
        <h1>React + Webpack + Storybook</h1>
        <p className="hero-copy">
          This starter gives you a simple React application, a custom Webpack pipeline, and Storybook support for building UI pieces in isolation.
        </p>
      </section>

      <section className="card-grid" aria-label="Project highlights">
        {highlights.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
            tag={item.tag}
          />
        ))}
      </section>
    </main>
  );
}
