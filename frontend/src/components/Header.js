import React from "react";
import {
    HeaderSurface,
    ApplicationNameContainer,
    ApplicationNameLogoContainer,
    ApplicationNameLogo,
    ApplicationNameTitle,
    NavigationBar,
    NavItem,
    NavLogoContainer,
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
                    <NavLogoContainer src={process.env.PUBLIC_URL + "/NavLogoHome.svg"}/>
                    <NavTitle>Home</NavTitle>
                </NavItem>
                <NavItem to="/search-inputs" >
                    <NavLogoContainer src={process.env.PUBLIC_URL + "/NavLogoSearchInputs.svg"}/>
                    <NavTitle>Search Inputs</NavTitle>
                </NavItem>
                <NavItem to="/properties">
                    <NavLogoContainer src={process.env.PUBLIC_URL + "/NavLogoProperties.svg"}/>
                    <NavTitle>Properties</NavTitle>
                </NavItem>
                <NavItem to="/login">
                    <NavLogoContainer src={process.env.PUBLIC_URL + "/NavLogoLogin.svg"}/>
                    <NavTitle>Login</NavTitle>
                </NavItem>
            </NavigationBar>
        </HeaderSurface>
    );
};

export default Header;