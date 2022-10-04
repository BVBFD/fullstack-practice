/// <reference types="vite/client" />
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // 여기에 적용하고 싶은 속성과 타입을 정의한다
    bg: string;
    bgLighter: string;
    text: string;
    textSoft: string;
    soft: string;
    scrollbarTrack: string;
    scrollbarThumb: string;
  }
}
