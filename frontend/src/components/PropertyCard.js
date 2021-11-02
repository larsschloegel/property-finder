import React from "react";
import {
    Card,
    Image,
    CardContent,
    TitleContainer,
    CardTitle,
    DetailsButton,
    DetailsButtonVectors,
    Vector,
    AddressContainer,
    AddressContainerVectors,
    AddressContainerTitle,
    KpiContainer,
    ValueContainer1,
    ValueDescription1,
    ValueField1,
    Value1
} from "../styles/PropertyCard.style";

const PropertyCard = () => {
    return (
        <Card>
            <Image
                alt=""
                src="https://static.overlay-tech.com/assets/11b6e432-01e3-49a6-af28-ce04e08b8de6.png"
            />
            <CardContent>
                <TitleContainer>
                    <CardTitle>Write a title here</CardTitle>
                    <DetailsButton>
                        <DetailsButtonVectors>
                            <Vector
                                alt=""
                                src="https://static.overlay-tech.com/assets/17426534-e0c5-4d48-b293-6bc7c6a040dd.svg"
                            />
                        </DetailsButtonVectors>
                    </DetailsButton>
                </TitleContainer>
                <AddressContainer>
                    <AddressContainerVectors
                        alt=""
                        src="https://static.overlay-tech.com/assets/2d8505fe-40b4-4078-9bca-4db612940ed0.svg"
                    />
                    <AddressContainerTitle>
                        Markstrasse 2, Berlin
                    </AddressContainerTitle>
                </AddressContainer>
                <KpiContainer>
                    <ValueContainer1>
                        <ValueDescription1>
                            Return on Investment
                        </ValueDescription1>
                        <ValueField1>
                            <Value1>2.3 %</Value1>
                        </ValueField1>
                    </ValueContainer1>
                    <ValueContainer1>
                        <ValueDescription1>Cash Flow</ValueDescription1>
                        <ValueField1>
                            <Value1>820 €</Value1>
                        </ValueField1>
                    </ValueContainer1>
                </KpiContainer>
            </CardContent>
        </Card>
    );
};

export default PropertyCard;