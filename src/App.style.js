import styled, { createGlobalStyle } from 'styled-components';
import colors from './theme/colors.json';

const fontBase = "'Inter', 'Avenir Next', 'Segoe UI', sans-serif";
const pageBackground = `linear-gradient(180deg, ${colors.surfaceBase} 0%, ${colors.surfaceMuted} 100%)`;
const bodyBackground = `radial-gradient(circle at top, ${colors.accentSoft}, transparent 40%), ${pageBackground}`;

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
    font-family: ${fontBase};
    background: ${pageBackground};
    color: ${colors.inkStrong};
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: ${bodyBackground};
  }

  #root {
    min-height: 100vh;
  }
`;

export const AppShell = styled.main`
  width: min(1100px, calc(100% - 3rem));
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 0 5rem;
  font-family: ${fontBase};
`;

export const Hero = styled.section`
  max-width: 760px;
  margin-bottom: 2.5rem;
`;

export const Eyebrow = styled.p`
  margin: 0 0 0.75rem;
  color: ${colors.accent};
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  color: ${colors.inkStrong};
  font-size: clamp(2.6rem, 5vw, 4.6rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
`;

export const HeroCopy = styled.p`
  max-width: 60ch;
  margin: 1.25rem 0 0;
  color: ${colors.inkMuted};
  font-size: 1.05rem;
  line-height: 1.7;
`;

export const CardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
`;
