import React from "react";
import {
    CardSurface,
    CardImage,
    CardContent,
    CardContainerTitle,
    CardContainerTitleText,
    DetailsButton,
    DetailsButtonVectors,
    CardContainerAddress,
    CardContainerAddressVectors,
    CardContainerAddressValue,
    CardContentContainerKPI,
    CardContentContainerKPIValueContainer,
    CardContentContainerKPIValueContainerDescription,
    Value1
} from "../styles/PropertyCard.style";

const PropertyCard = () => {
    return (
        <CardSurface>
            <CardImage src={process.env.PUBLIC_URL + "/RealEstateExample.png"} alt="RealEstateExample"/>
            <CardContent>
                <CardContainerTitle>
                    <CardContainerTitleText>Write a title here</CardContainerTitleText>
                    <DetailsButton>
                        <DetailsButtonVectors src={process.env.PUBLIC_URL + "/DetailsButtonLogo.svg"} alt="DetailsButton"/>
                    </DetailsButton>
                </CardContainerTitle>
                <CardContainerAddress>
                    <CardContainerAddressVectors src={process.env.PUBLIC_URL + "/AddressLogo.svg"} alt="AddressLogo"/>
                    <CardContainerAddressValue>
                        Markstrasse 2, Berlin
                    </CardContainerAddressValue>
                </CardContainerAddress>
                <CardContentContainerKPI>
                    <CardContentContainerKPIValueContainer>
                        <CardContentContainerKPIValueContainerDescription>
                            Return on Investment
                        </CardContentContainerKPIValueContainerDescription>
                        <Value1>2.3 %</Value1>
                    </CardContentContainerKPIValueContainer>
                    <CardContentContainerKPIValueContainer>
                        <CardContentContainerKPIValueContainerDescription>Cash Flow</CardContentContainerKPIValueContainerDescription>
                        <Value1>820 €</Value1>
                    </CardContentContainerKPIValueContainer>
                </CardContentContainerKPI>
            </CardContent>
        </CardSurface>
    );
};

export default PropertyCard;