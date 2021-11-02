import React from "react";
import {
    HeaderSurface,
    ApplicationNameContainer,
    ApplicationNameLogoContainer,
    ApplicationNameLogo,
    ApplicationNameTitle,
    NavigationBar,
    NavItem,
    NavLogoContainerHome,
    NavLogoContainerSearchInputs,
    NavLogoContainerProperties,
    NavLogoContainerLogin,
    NavTitle,
} from "../styles/Header.style";

const Header = () => {
    return (
        <HeaderSurface>
            <ApplicationNameContainer>
                <ApplicationNameLogoContainer>
                    <ApplicationNameLogo/>
                </ApplicationNameLogoContainer>
                <ApplicationNameTitle>Property Finder 2.0</ApplicationNameTitle>
            </ApplicationNameContainer>
            <NavigationBar>
                <NavItem to="/">
                    <NavLogoContainerHome/>
                    <NavTitle>Home</NavTitle>
                </NavItem>
                <NavItem to="/search-inputs">
                    <NavLogoContainerSearchInputs/>
                    <NavTitle>Search Inputs</NavTitle>
                </NavItem>
                <NavItem to="/properties">
                    <NavLogoContainerProperties/>
                    <NavTitle>Properties</NavTitle>
                </NavItem>
                <NavItem to="/login">
                    <NavLogoContainerLogin/>
                    <NavTitle>Login</NavTitle>
                </NavItem>
            </NavigationBar>
        </HeaderSurface>
    );
};

export default Header;