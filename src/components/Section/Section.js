import PropTypes from 'prop-types';

import { Section, Title } from './Section.styled';

export function SectionPart({ title, children }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};