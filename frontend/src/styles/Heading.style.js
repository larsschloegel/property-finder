import styled from "styled-components";

export const Heading = styled.h1`
  height: 83px;
  width: 657px;
  font-family: "Inter",system-ui;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: rgba(45, 52, 54, 1);
  display: flex;
  align-items: center;
  text-shadow: 0 4px 0 ${props => props.theme.colors.white};
  letter-spacing: -1px;
`;