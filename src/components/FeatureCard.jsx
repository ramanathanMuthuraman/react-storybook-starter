import PropTypes from 'prop-types';
import './FeatureCard.css';

export default function FeatureCard({ title, description, tag, tone = 'default' }) {
  return (
    <article className={`feature-card feature-card--${tone}`}>
      <span className="feature-card__tag">{tag}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  tone: PropTypes.oneOf(['default', 'highlight']),
};
