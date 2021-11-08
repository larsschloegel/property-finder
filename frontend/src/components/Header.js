import React from "react";
import {
    HeaderSurface,
    ApplicationNameContainer,
    ApplicationNameLogoContainer,
    ApplicationNameLogo,
    ApplicationNameTitle,
    NavigationBar,
    NavItem,
    ImageWrapper,
    Image,
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
                    <ImageWrapper>
                        <Image src={process.env.PUBLIC_URL + "/HomeLogo.svg"} alt={"HomeLogo"}/>
                    </ImageWrapper>
                    <NavTitle>Home</NavTitle>
                </NavItem>
                <NavItem to="/search-inputs" >
                    <ImageWrapper>
                        <Image src={process.env.PUBLIC_URL + "/DetailsLogo.svg"} alt={"SearchInputsLogo"}/>
                    </ImageWrapper>
                    <NavTitle>Search Inputs</NavTitle>
                </NavItem>
                <NavItem to="/properties">
                    <ImageWrapper>
                        <Image src={process.env.PUBLIC_URL + "/PropertiesLogo.svg"} alt={"PropertiesLogo"}/>
                    </ImageWrapper>
                    <NavTitle>Properties</NavTitle>
                </NavItem>
                <NavItem to="/login">
                    <ImageWrapper>
                        <Image src={process.env.PUBLIC_URL + "/LoginLogo.svg"} alt={"LoginLogo"}/>
                    </ImageWrapper>
                    <NavTitle>Login</NavTitle>
                </NavItem>
            </NavigationBar>
        </HeaderSurface>
    );
};

export default Header;