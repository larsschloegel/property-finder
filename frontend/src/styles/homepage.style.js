import styled, {css} from "styled-components";
import {sectionStyles} from "./blocks/section";
import {containerStyles} from "./blocks/container";


export const Wrapper = styled.section(
    ({theme}) => css`
      .section {
        ${theme.media.d(css`
          margin-bottom: 96px;
        `)}
        ${theme.media.m(css`
          margin-bottom: 64px;
        `)}

        {${sectionStyles}
        
      }
      
      
      .container {
        width: 100%;
        max-width: 1440px;

        ${theme.media.w(css`
          padding: 0 40px;
        `)}

        ${theme.media.t(css`
          padding: 0;
        `)}

        ${theme.media.m(css`
          padding: 0 8px;
        `)}
        {${containerStyles}
      }

      .preview {
        position: relative;

        &:before {
          content: "";
          display: block;
          padding-bottom: 60.63%;

          ${theme.media.m(css`
            padding-bottom: 64%;
          `)}

          ${theme.media.m(css`
            display: none;
          `)}
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          object-fit: cover;

          ${theme.media.m(css`
            border-radius: 0;
          `)}

          ${theme.media.m(css`
            position: static;
            height: 300px;
            border-radius: 16px;
            object-position: 50% 100%;
          `)}
        }

      }

      .wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 145px 80px;

        ${theme.media.m(css`
          padding: 98px 80px;
        `)}

        ${theme.media.m(css`
          padding: 80px 40px;
        `)}

        ${theme.media.m(css`
          padding: 80px 32px;
          text-align: center;
        `)}
      }

      .title {
        max-width: 450px;
        margin-bottom: 16px;
        color: ${props => props.theme.colors.white};
      }


      .info {
        margin-top:12px;
        margin-bottom: 24px;
        color: ${props => props.theme.colors.white};
        font-size: ${props => props.theme.fonts.body1.fontSize};
        line-height: ${props => props.theme.fonts.body1.lineHeight};
        letter-spacing: ${props => props.theme.fonts.body1.letterSpacing};

        ${theme.media.d(css`
          font-size: 16px;
        `)}
      }

      .body {
        margin-top: 24px

        ${theme.media.d(css`
          margin-top: 16px;
        `)}
      }







    `,
)
    
    
