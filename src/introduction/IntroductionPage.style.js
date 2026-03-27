import styled from 'styled-components';
import colors from '../theme/colors.json';

const fontBase = "'Inter', 'Avenir Next', 'Segoe UI', sans-serif";

export const Page = styled.section`
  min-height: 100vh;
  padding: 3.5rem clamp(1.5rem, 4vw, 4rem);
  background:
    radial-gradient(circle at top left, ${colors.accentSoft}, transparent 34%),
    linear-gradient(180deg, ${colors.surfaceBase} 0%, ${colors.surfaceMuted} 100%);
  color: ${colors.inkStrong};
  font-family: ${fontBase};
`;

export const Hero = styled.div`
  max-width: 760px;
  margin: 0 auto 2rem;
`;

export const Eyebrow = styled.p`
  margin: 0 0 0.85rem;
  color: ${colors.accent};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
`;

export const HeroCopy = styled.p`
  max-width: 62ch;
  margin: 1.2rem 0 0;
  color: ${colors.inkMuted};
  font-size: 1.05rem;
  line-height: 1.75;
`;

export const VersionBadge = styled.span`
  display: inline-flex;
  margin-top: 1.15rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: ${colors.tagBg};
  color: ${colors.tagText};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.1rem;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SectionCard = styled.article`
  padding: 1.4rem;
  border: 1px solid ${colors.borderSoft};
  border-radius: 24px;
  background: ${colors.surfaceCard};
  box-shadow: 0 20px 42px ${colors.shadow};
`;

export const SectionTitle = styled.h2`
  margin: 0 0 0.8rem;
  font-size: 1.05rem;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  color: ${colors.inkMuted};
  line-height: 1.7;
`;

export const CommandList = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.8rem 1rem;
  margin: 0;
`;

export const CommandLabel = styled.dt`
  color: ${colors.inkStrong};
  font-weight: 700;
`;

export const CommandValue = styled.dd`
  margin: 0;
  color: ${colors.inkMuted};
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
`;
