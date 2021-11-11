import styled from "styled-components";

export const Heading = styled.h1`
  font-family: ${props => props.theme.fonts.inter48Bold.family};
  font-size: ${props => props.theme.fonts.inter48Bold.size};
  font-weight: ${props => props.theme.fonts.inter48Bold.weight};
  line-height: ${props => props.theme.fonts.inter48Bold.lineHeight};
  color: rgba(45, 52, 54, 1);
  display: flex;
  align-items: center;
  text-shadow: 0 4px 0 ${props => props.theme.colors.white};
  letter-spacing: -1px;
`;