import {Heading} from "../styles/Heading.style";

export default function PropertyDetails({properties}) {

    return (
        <section>
            <Heading>Property Details</Heading>
            <h2>ID: {properties.id}</h2>
        </section>
    )
}