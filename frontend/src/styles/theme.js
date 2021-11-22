/* This is the project stylesheet */
// eslint-disable-next-line
import {css} from "styled-components";
import {rem as _rem} from 'polished'

const rem = (...arg) => _rem(...arg)

const flex = (opt) => css`
  display: flex;
  justify-content: ${opt.x || 'center'};
  align-items: ${opt.y || 'center'};
`
const media = {
    w: (inner) => css`
      @media only screen and (max-width: 1419px) {
        ${inner}
      }
    `,
    x: (inner) => css`
      @media only screen and (max-width: 1339px) {
        ${inner}
      }
    `,
    d: (inner) => css`
      @media only screen and (max-width: 1179px) {
        ${inner}
      }
    `,
    t: (inner) => css`
      @media only screen and (max-width: 1023px) {
        ${inner}
      }
    `,
    m: (inner) => css`
      @media only screen and (max-width: 767px) {
        ${inner}
      }
    `,
    a: (inner) => css`
      @media only screen and (max-width: 639px) {
        ${inner}
      }
    `,
    s: (inner) => css`
      @media only screen and (max-width: 474px) {
        ${inner}
      }
    `,
}

export default {
    colors: {
        blackPrimary: "rgba(35,35,35,1)",
        dimGray: "rgba(92,92,92,1)",
        greyPrimary: "rgba(106,118,118,1)",
        mediumSlateBlue: "rgba(108,92,231,1)",
        ligthSlateBlue: "rgba(165, 166, 246, 1)",
        sandyBrown: "rgba(253,203,110,1)",
        sandyBrownTint: "rgb(253,234,167)",
        white: "rgba(255,255,255,1)",
        greySecondary: "rgba(173, 173, 173, 1)",
        grey40: "rgba(227, 229, 229, 1)"
    },
    fonts: {
        inter18Bold: {
            family: "Inter",
            size: "18px",
            weight: "700",
            lineHeight: "normal"
        },
        inter18Medium: {
            family: "Inter",
            size: "18px",
            weight: "500",
            lineHeight: "normal"
        },
        inter14Bold: {
            family: "Inter",
            size: "14px",
            weight: "700",
            lineHeight: "normal"
        },
        inter14Medium: {
            family: "Inter",
            size: "14px",
            weight: "400",
            lineHeight: "normal"
        },
        inter48Bold: {
            family: "Inter",
            size: "48px",
            weight: "700",
            lineHeight: "normal"
        },
        dmSans: {
            fontFamily: "DM Sans, sans-serif"
        },
        poppins: {
            fontFamily: "Poppins, sans-serif"
        },
        body1: {
            fontSize: "24px",
            lineHeight: (32 / 24),
            letterSpacing: "-.01em",
        },
        bodyBold1: {
            fontSize: "24px",
            lineHeight: (32 / 24),
            fontWeight: "600",
            letterSpacing: "-.01em",
        },
        body2: {
            fontSize: "16px",
            lineHeight: (24 / 16),
        },
        bodyBold2: {
            fontSize: "16px",
            lineHeight: (24 / 16),
            fontWeight: "500",
        },
        caption1: {
            fontSize: "14px",
            lineHeight: (24 / 14),
        },
        captionBold1: {
            fontSize: "14px",
            lineHeight: (24 / 14),
            fontWeight: "600",
        },
        caption2: {
            fontSize: "12px",
            lineHeight: (20 / 12),
        },
        captionBold2: {
            fontSize: "12px",
            lineHeight: (20 / 12),
            fontWeight: "600",
        },
        hairline1: {
            fontSize: "16px",
            lineHeight: 1,
            fontWeight: "700",
            textTransform: "uppercase",
        },
        hairline2: {
            fontSize: "12px",
            lineHeight: 1,
            fontWeight: "700",
            textTransform: "uppercase",
        },
        button: {
            fontSize: "16px",
            lineHeight: 1,
            fontWeight: "700",
        },
        button2: {
            fontSize: "14px",
            lineHeight: (16/14),
            fontWeight: "700",
        },

    },
    media: {
        ...media,
    }
};