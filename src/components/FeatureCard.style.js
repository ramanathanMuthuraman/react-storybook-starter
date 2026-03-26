import styled, { css } from 'styled-components';
import colors from '../theme/colors.json';

const fontBase = "'Inter', 'Avenir Next', 'Segoe UI', sans-serif";

const highlightStyles = css`
  background: linear-gradient(135deg, ${colors.surfaceHighlightStart} 0%, ${colors.surfaceHighlightEnd} 100%);
  border-color: ${colors.borderAccent};
`;

export const Card = styled.article`
  padding: 1.5rem;
  border: 1px solid ${colors.borderSoft};
  border-radius: 24px;
  background: ${colors.surfaceCard};
  box-shadow: 0 22px 45px ${colors.shadow};
  backdrop-filter: blur(10px);
  font-family: ${fontBase};

  ${(props) => props.$tone === 'highlight' && highlightStyles}
`;

export const Tag = styled.span`
  display: inline-flex;
  margin-bottom: 0.85rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: ${colors.tagBg};
  color: ${colors.tagText};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 0 0 0.75rem;
  color: ${colors.inkStrong};
  font-size: 1.35rem;
  line-height: 1.1;
`;

export const Description = styled.p`
  margin: 0;
  color: ${colors.inkMuted};
  line-height: 1.65;
`;
