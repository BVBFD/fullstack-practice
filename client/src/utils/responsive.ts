import { CSSProp, css } from 'styled-components';

export const mobile = (width: number | string, props: CSSProp) => {
  switch (width) {
    // desktop
    case 1280:
      return css`
        @media screen and (max-width: 1280px) {
          ${props}
        }
      `;

    // desktop, notebook
    case 1024:
      return css`
        @media screen and (max-width: 1024px) {
          ${props}
        }
      `;

    // notebook
    case 960:
      return css`
        @media screen and (max-width: 960px) {
          ${props}
        }
      `;

    // tablet
    case 768:
      return css`
        @media screen and (max-width: 768px) {
          ${props}
        }
      `;

    // mobile
    case 576:
      return css`
        @media screen and (max-width: 576px) {
          ${props}
        }
      `;

    // 가로모드
    case 'portrait':
      return css`
        @media all and (orientation: portrait) {
          ${props}
        }
      `;

    // 세로모드
    case 'landscape':
      return css`
        @media all and (orientation: landscape) {
          ${props}
        }
      `;

    case 'SurfacePro':
      return css`
        @media only screen and (max-width: 912px) and (max-width: 1368px) {
          ${props}
        }
      `;

    case 'IpadAir':
      return css`
        @media only screen and (max-width: 820px) and (max-width: 1180px) {
          ${props}
        }
      `;

    case 'IpadMini':
      return css`
        @media only screen and (max-width: 768px) and (max-width: 1024px) {
          ${props}
        }
      `;

    default:
      return;
  }
};
