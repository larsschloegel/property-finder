import {Heading} from "../styles/Heading.style";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PurchasePriceTable from "../components/PropertyDetailsTableWithResults";

export default function PropertyDetails({properties, units}) {

    const {id} = useParams();
    const [property, setProperty] = useState([]);

    useEffect(()=>{
        setProperty(properties.find(property => property.id === id))
    }, [id])

    console.log(property)
    return (
        <section>
            <Heading>Property Details of {property?.name}</Heading>
            <PurchasePriceTable property={property} units={units}></PurchasePriceTable>
        </section>
    )
}