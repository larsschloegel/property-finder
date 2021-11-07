import React from "react";
import {Heading} from "../styles/Heading.style";
import PropertyShowcase from "../components/PropertyShowcase";
const Properties = ({properties}) => {
    return (
        <section>
            <Heading>Your dream investments</Heading>
            <PropertyShowcase properties={properties}/>
        </section>
    )
};

export default Properties;

