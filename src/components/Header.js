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
  padding-bottom: 10px;
  padding-left: 5%;
  padding-right: 5%;
  background: linear-gradient(rgba(128, 0, 128, 0.7), transparent);
  background-color: #000;
  display: flex;
  justify-content: space-between;

  /* width: 100%; */
  z-index: 50;
  > div > a {
    text-decoration: none;
    color: white;
  }
  > div > a + a {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export default function Header(props) {
  return (
    <header css={headerStyles}>
      <div css={headerLogoStyles}>
        <a href="/">REACT</a>
      </div>

      <div className="menu">
        <a href="/">Courses</a>
        <a href="/">Tests</a>
      </div>
    </header>
  );
}
