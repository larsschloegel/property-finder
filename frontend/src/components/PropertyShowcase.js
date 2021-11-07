import PropertyCard from "./PropertyCard";
import styled from "styled-components";

export default function PropertyShowcase() {

    return (
        <Wrapper>
            <PropertyCard/>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: calc(50vh - 60px);
  max-width: 1920px;
`