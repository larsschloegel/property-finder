import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderSurface = styled.header`
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
export const ApplicationNameContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  background-color: ${props => props.theme.colors.white};
  margin-right: 12px;
  border-radius: 20px;
  padding: 4px 4px 5px 5px;
  box-shadow: 0 2px 3px 0 rgba(38, 50, 56, 0.2),
    0 3px 6px 0 rgba(38, 50, 56, 0.08);
  display: flex;
  align-items: center;
  width: 55px;
  height: 55px;
`;
export const Vectors = styled.img`
  width: 55px;
  height: 55px;
`;
export const ApplicationName = styled.p`
  font-family: "Inter",system-ui;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  color: ${props => props.theme.colors.mediumSlateBlue};
`;
export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 909px;
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  flex: 1;
  &:not(:last-of-type) {
    margin-right: 2px;
  }
`;
export const NavLogo = styled.img`
  width: 46px;
  height: 47px;
  margin-right: 2px;
`;
export const NavTitle = styled.p`
  font-family: "Inter",system-ui;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  color: rgba(45, 52, 54, 1);
  letter-spacing: 0.2px;
`;