import PropTypes from 'prop-types';
import { Card, Description, Tag, Title } from './FeatureCard.style';

export default function FeatureCard({ title, description, tag, tone = 'default' }) {
  return (
    <Card $tone={tone}>
      <Tag>{tag}</Tag>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  tone: PropTypes.oneOf(['default', 'highlight']),
};
