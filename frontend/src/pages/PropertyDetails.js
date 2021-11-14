import {Heading} from "../styles/Heading.style";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PropertyDetailsTable from "../components/tables/PropertyDetailsTable";

export default function PropertyDetails({properties, units}) {

    const {id} = useParams();
    const [property, setProperty] = useState([]);

    useEffect(()=>{
        setProperty(properties.find(property => property.id === id))
    }, [id])

    return (
        <section>
            <Heading>Property Details of "{property?.name}"</Heading>
            <PropertyDetailsTable property={property} units={units}></PropertyDetailsTable>
        </section>
    )
}