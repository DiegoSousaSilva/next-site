import React from 'react'

import { Container, Link } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
        <Link
          href="https://github.com/DiegoSousaSilva"
          target="_blank"
        >
          Powered by Diego dev</Link>
    </Container>
  );
};

export default Footer;
