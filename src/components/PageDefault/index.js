import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
background: var(--grayDark);
/* background-color: var(--black); */
color: var(--white);
flex: 1;
padding-top: 50px;
padding-left: 5%;
padding-right: 5%;
${({ paddinAll }) => css`padding: ${paddinAll}`};
`;

function PageDefault({ children, paddinAll }) {
  return (
    <>
      <Menu />
      <Main paddinAll={paddinAll}>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
