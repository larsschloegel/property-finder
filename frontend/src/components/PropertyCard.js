import React from "react";
import {
    CardWrapper,
    CardImageWrapper, CardImage,
    CardContentWrapper,
    CardSection, Divider,
    CardTitle, ButtonWrapper,
    AddressWrapper, AddressImageWrapper, Address,
    KPIWrapper, KPITitle, KPI
} from "../styles/PropertyCard.style";
import {Image} from "../styles/Header.style";

const PropertyCard = () => {
    return (
        <CardWrapper>
            <CardImageWrapper>
                <CardImage src={process.env.PUBLIC_URL + "/RealEstateExample.png"} alt="RealEstateExample"/>
            </CardImageWrapper>
            <CardContentWrapper>
                <CardSection>
                    <CardTitle>Wunderschönes Haus</CardTitle>
                    <ButtonWrapper>
                        <Image src={process.env.PUBLIC_URL + "/DetailsLogoWhite.svg"} alt={"DetailsLogoWhite"}/>
                    </ButtonWrapper>
                </CardSection>
                <CardSection>
                    <AddressWrapper>
                        <AddressImageWrapper>
                            <Image src={process.env.PUBLIC_URL + "/AddressLogo.svg"} alt="AddressLogo"/>
                        </AddressImageWrapper>
                        <Address>Marktstrasse 2, Berlin</Address>
                    </AddressWrapper>
                </CardSection>
                <Divider/>
                <CardSection>
                    <KPIWrapper>
                        <KPITitle>Return on Investment</KPITitle>
                        <KPI>2.3 %</KPI>
                    </KPIWrapper>
                    <KPIWrapper>
                        <KPITitle>Cashflow</KPITitle>
                        <KPI> 820 €</KPI>
                    </KPIWrapper>
                </CardSection>
            </CardContentWrapper>
        </CardWrapper>
    );
};

export default PropertyCard;