import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';

const NotFoundPage = () => {
  return (
    <Layout>
      <Container type="content" className="text-center">
        <h1>Pagina No Encontrada</h1>
        <p>Esta dirección no existe... bajon.</p>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
