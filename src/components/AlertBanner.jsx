import PropTypes from 'prop-types';
import { Banner, Copy, Message, Title, ToneBadge } from './AlertBanner.style';

export default function AlertBanner({ title, message, tone = 'info' }) {
  return (
    <Banner $tone={tone} role="status">
      <ToneBadge $tone={tone}>{tone}</ToneBadge>
      <Copy>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Copy>
    </Banner>
  );
}

AlertBanner.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  tone: PropTypes.oneOf(['info', 'success']),
};
