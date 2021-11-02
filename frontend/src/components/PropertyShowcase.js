import PropertyCard from "./PropertyCard";
import styled from "styled-components";

export default function PropertyShowcase() {

    return (
        <Showcase>
            <PropertyCard/>
        </Showcase>
    )
}

const Showcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 12px;
  justify-content: left;
`