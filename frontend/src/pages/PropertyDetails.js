import {Heading} from "../styles/Heading.style";
import PropertyDetailsTable from "../components/tables/PropertyDetailsTable";
import useSingleProperty from "../hooks/useSingleProperty";

export default function PropertyDetails({units}) {

    const {property} = useSingleProperty()

    return (
        <section>
            <Heading>Property Details of "{property?.name}"</Heading>
            <PropertyDetailsTable property={property} units={units}/>
        </section>
    )
}