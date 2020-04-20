import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Blog de Guille</p>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/page-2/">Pagina2</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
