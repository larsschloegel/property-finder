import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderSurface = styled.header`
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
export const ApplicationNameContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ApplicationNameLogoContainer = styled.div`
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
export const ApplicationNameLogo = styled.svg`
  background-image: url("/ApplicationNameLogo.svg");
  width: 55px;
  height: 55px;
`;
export const ApplicationNameTitle = styled.div`
  font-family: "Inter",system-ui;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  color: ${props => props.theme.colors.mediumSlateBlue};
`;
export const NavigationBar = styled.div`
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 846px;
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 16px;
  flex: 1;
  &:not(:last-of-type) {
    margin-right: 2px;
  }
`;
export const NavLogoContainerHome = styled.svg`
  background-color: rgba(194, 194, 194, 1);
  width: 32px;
  height: 32px;
  background-image: url("/NavLogoHome.svg");
  margin-right: 16px;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  align-items: flex-start;
`;
export const NavTitle = styled.p`
  font-family: "Inter",system-ui;
  font-size: 18px;
  color: rgba(45, 52, 54, 1);
  letter-spacing: 0.2px;
  font-weight: 700;
  line-height: normal;
`;
export const NavLogoContainerSearchInputs = styled.div`
  background-color: rgba(194, 194, 194, 1);
  width: 32px;
  height: 32px;
  background-image: url("/NavLogoSearchInputs.svg");
  margin-right: 16px;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  align-items: flex-start;
`;
export const NavLogoContainerProperties = styled.div`
  background-color: rgba(194, 194, 194, 1);
  width: 32px;
  height: 32px;
  background-image: url("/NavLogoProperties.svg");
  margin-right: 16px;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  align-items: flex-start;
`;
export const NavLogoContainerLogin = styled.div`
  background-color: rgba(194, 194, 194, 1);
  width: 32px;
  height: 32px;
  background-image: url("/NavLogoLogin.svg");
  margin-right: 16px;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  align-items: flex-start;
`;



