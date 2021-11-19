import {Heading} from "../styles/Heading.style";
import PropertyDetailsTables from "../components/tables/PropertyDetailsTables";
import useSingleProperty from "../hooks/useSingleProperty";

export default function PropertyDetails({units}) {

    const {property} = useSingleProperty()

    return (
        <section>
            <Heading>Property Details of "{property.name}"</Heading>
            <PropertyDetailsTables property={property} units={units}/>
        </section>
    )
}