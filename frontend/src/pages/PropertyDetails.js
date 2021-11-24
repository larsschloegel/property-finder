import PropertyDetailsTables from "../components/tables/PropertyDetailsTables";
import useSingleProperty from "../hooks/useSingleProperty";

export default function PropertyDetails({units}) {

    const {property} = useSingleProperty()

    return (
        <section>
            <PropertyDetailsTables property={property} units={units}/>
        </section>
    )
}