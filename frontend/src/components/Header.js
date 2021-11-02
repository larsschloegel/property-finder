import React from "react";
import {
    HeaderSurface,
    ApplicationNameContainer,
    Logo,
    Vectors,
    ApplicationName,
    NavigationBar,
    NavItem,
    NavLogo,
    NavTitle,
} from "../styles/Header.style";

const Header = () => {
    return (
        <HeaderSurface>
            <ApplicationNameContainer>
                <Logo>
                    <Vectors
                        alt=""
                        src="https://static.overlay-tech.com/assets/15f36158-2302-432b-9e20-b08b99462e00.svg"
                    />
                </Logo>
                <ApplicationName>Property Finder 2.0</ApplicationName>
            </ApplicationNameContainer>
            <NavigationBar>
                <NavItem to="/">
                    <NavLogo
                        alt=""
                        src="https://static.overlay-tech.com/assets/997c7f60-f35d-4bba-9026-56c674dabf00.svg"
                    />
                    <NavTitle>Home</NavTitle>
                </NavItem>
                <NavItem to="/search-inputs">
                    <NavLogo
                        alt=""
                        src="https://static.overlay-tech.com/assets/ec3b9b42-5353-4422-b1bf-864f44cf2ff5.svg"
                    />
                    <NavTitle>Search Inputs</NavTitle>
                </NavItem>
                <NavItem to="/properties">
                    <NavLogo
                        alt=""
                        src="https://static.overlay-tech.com/assets/d3e15a1a-27ca-4009-85d0-a785dce393ae.svg"
                    />
                    <NavTitle>Properties</NavTitle>
                </NavItem>
                <NavItem to="/login">
                    <NavLogo
                        alt=""
                        src="https://static.overlay-tech.com/assets/17e0211f-d909-41e5-b31a-7ebb263f2824.svg"
                    />
                    <NavTitle>Login</NavTitle>
                </NavItem>
            </NavigationBar>
        </HeaderSurface>
    );
};

export default Header;