import PropertyCard from "./PropertyCard";
import styled from "styled-components";

export default function PropertyShowcase({properties}) {

    return (
        <Wrapper>
            {
                properties.map(property => <PropertyCard key={property.id} property={property}/> )
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  min-height: calc(50vh - 60px);
  max-width: 1920px;
`