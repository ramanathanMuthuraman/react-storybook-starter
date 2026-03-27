import styled, { css } from 'styled-components';
import colors from '../theme/colors.json';

const fontBase = "'Inter', 'Avenir Next', 'Segoe UI', sans-serif";

const bannerToneStyles = {
  info: css`
    border-color: rgba(97, 218, 251, 0.35);
    background: linear-gradient(135deg, rgba(97, 218, 251, 0.16) 0%, ${colors.surfaceCard} 100%);
  `,
  success: css`
    border-color: ${colors.borderAccent};
    background: linear-gradient(135deg, ${colors.surfaceHighlightStart} 0%, ${colors.surfaceCard} 100%);
  `,
};

const badgeToneStyles = {
  info: css`
    background: ${colors.storybookAccent};
    color: ${colors.tagBg};
  `,
  success: css`
    background: ${colors.accent};
    color: ${colors.tagText};
  `,
};

export const Banner = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
  align-items: start;
  padding: 1rem 1.1rem;
  border: 1px solid ${colors.borderSoft};
  border-radius: 20px;
  background: ${colors.surfaceCard};
  box-shadow: 0 18px 38px ${colors.shadow};
  font-family: ${fontBase};

  ${(props) => bannerToneStyles[props.$tone] ?? bannerToneStyles.info}
`;

export const ToneBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 4.75rem;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${(props) => badgeToneStyles[props.$tone] ?? badgeToneStyles.info}
`;

export const Copy = styled.div`
  min-width: 0;
`;

export const Title = styled.h3`
  margin: 0 0 0.3rem;
  color: ${colors.inkStrong};
  font-size: 1rem;
  line-height: 1.2;
`;

export const Message = styled.p`
  margin: 0;
  color: ${colors.inkMuted};
  line-height: 1.55;
`;
