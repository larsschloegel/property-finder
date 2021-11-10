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
                        <Image src={"/HomeLogo.svg"} alt={"Home Logo"}/>
                    </ImageWrapper>
                    <NavTitle>Home</NavTitle>
                </NavItem>
                <NavItem to="/search-inputs" >
                    <ImageWrapper>
                        <Image src={"/DetailsLogo.svg"} alt={"Search Inputs Logo"}/>
                    </ImageWrapper>
                    <NavTitle>Search Inputs</NavTitle>
                </NavItem>
                <NavItem to="/properties">
                    <ImageWrapper>
                        <Image src={"/PropertiesLogo.svg"} alt={"Properties Logo"}/>
                    </ImageWrapper>
                    <NavTitle>Properties</NavTitle>
                </NavItem>
                <NavItem to="/login">
                    <ImageWrapper>
                        <Image src={"/LoginLogo.svg"} alt={"Login Logo"}/>
                    </ImageWrapper>
                    <NavTitle>Login</NavTitle>
                </NavItem>
            </NavigationBar>
        </HeaderSurface>
    );
};

export default Header;