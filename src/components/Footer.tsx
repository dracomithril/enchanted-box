import styled from 'styled-components';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={className}>
      tworzone przez
      <a href="https://michal.grezel.pl" target="_blank" rel="noreferrer">
        michal.grezel
      </a>
    </footer>
  );
};

const WithStyles = styled(Footer)`
  display: flex;
  flex: 1;
  font-style: italic;
  padding-top: 0.5rem;
  border-top: 1px solid #eaeaea;
  justify-content: right;
  align-items: center;

  a {
    margin-left: 0.5em;
  }
`;

export default WithStyles;
