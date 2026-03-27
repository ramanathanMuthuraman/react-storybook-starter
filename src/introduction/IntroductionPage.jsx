import { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  CommandLabel,
  CommandList,
  CommandValue,
  Eyebrow,
  Hero,
  HeroCopy,
  HeroTitle,
  List,
  Page,
  SectionCard,
  SectionGrid,
  SectionTitle,
  VersionBadge,
} from './IntroductionPage.style';

export default function IntroductionPage({ title, summary, version, highlights, commands }) {
  return (
    <Page>
      <Hero>
        <Eyebrow>Introduction</Eyebrow>
        <HeroTitle>{title}</HeroTitle>
        <HeroCopy>{summary}</HeroCopy>
        <VersionBadge>{version}</VersionBadge>
      </Hero>

      <SectionGrid>
        <SectionCard>
          <SectionTitle>What&apos;s Included</SectionTitle>
          <List>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </List>
        </SectionCard>

        <SectionCard>
          <SectionTitle>Quick Commands</SectionTitle>
          <CommandList>
            {commands.map((item) => (
              <Fragment key={item.label}>
                <CommandLabel>{item.label}</CommandLabel>
                <CommandValue>{item.value}</CommandValue>
              </Fragment>
            ))}
          </CommandList>
        </SectionCard>
      </SectionGrid>
    </Page>
  );
}

IntroductionPage.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  commands: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};
