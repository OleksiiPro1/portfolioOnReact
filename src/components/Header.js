/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// import { productionBrowserSourceMaps } from '../next.config';

const headerLogoStyles = css`
  font-size: 120%;
  font-weight: bold;
  z-index: 2;
  padding-left: 50px;
`;
const headerStyles = css`
  padding-top: 10px;
  /* padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px; */

  background: black;
  display: flex;
  justify-content: space-between;

  min-width: 100%;
  z-index: 50;
  > div > a {
    text-decoration: none;
    color: white;
  }
  > div > a + a {
    margin-left: 20px;
    margin-right: 20px;
  }
  /* @media screen and( max-width: 768px) {
    justify-content: space-around;
    .menu {
      display: none;
    }
  } */
`;

export default function Header(props) {
  return (
    <header css={headerStyles}>
      <div css={headerLogoStyles}>
        <a href="/">English</a>
      </div>

      <div className="menu">
        <a href="/courses/1">HTML</a>
        <a href="/courses/2">CSS</a>
        <a href="/courses/3">JS</a>
        <a href="/courses/4">REACT </a>
      </div>
    </header>
  );
}
