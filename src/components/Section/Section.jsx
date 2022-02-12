import { Section, Title } from './Section.styled';

export default function SectionBox({ title, children }) {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
}
