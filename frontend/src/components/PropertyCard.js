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
import {useHistory} from "react-router-dom";

export default function PropertyCard({property}){
    const history = useHistory()

    return (
        <CardWrapper>
            <CardImageWrapper>
                <CardImage src={"/RealEstateExample.png"} alt="Real Estate Example"/>
            </CardImageWrapper>
            <CardContentWrapper>
                <CardSection>
                    <CardTitle>{property.name}</CardTitle>
                    <ButtonWrapper onClick={()=> history.push(`properties/${property.id}`)}>
                        <Image src={"/DetailsLogoWhite.svg"} alt={"Details Logo White"}/>
                    </ButtonWrapper>
                </CardSection>
                <CardSection>
                    <AddressWrapper>
                        <AddressImageWrapper>
                            <Image src={"/AddressLogo.svg"} alt="Address Logo"/>
                        </AddressImageWrapper>
                        <Address>{property.address.street} {property.address.number}, {property.address.city}</Address>
                    </AddressWrapper>
                </CardSection>
                <Divider/>
                <CardSection>
                    <KPIWrapper>
                        <KPITitle>Return on Investment</KPITitle>
                        <KPI>{property.adjustedNetReturn}</KPI>
                    </KPIWrapper>
                    <KPIWrapper>
                        <KPITitle>Cashflow</KPITitle>
                        <KPI> {property.CFBTMonth}</KPI>
                    </KPIWrapper>
                </CardSection>
            </CardContentWrapper>
        </CardWrapper>
    )
}
