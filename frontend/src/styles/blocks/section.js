import {css} from "styled-components";

export const sectionStyles = css(
    ({theme}) => css`
      margin-bottom: 136px;
      ${theme.media.d(css`
        margin-bottom: 112px;
      `)}
      ${theme.media.m(css`
        margin-bottom: 64px;
      `)}
    `
)
