import styled from "styled-components";

export const CardSurface = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const CardImage = styled.img`
  height: 220px;
  align-self: stretch;
  margin-bottom: 10px;
  border-radius: 8px;
  object-fit: cover;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
`;
export const CardContainerTitle = styled.div`
  display: flex;
  align-items: center;
  width: 373px;
`;
export const CardContainerTitleText = styled.p`
  color: ${props => props.theme.colors.blackPrimary};
  flex: 1;
  margin-right: 20px;
  font-family: ${props =>
    props.theme.fonts.inter18Bold.family};
  font-size: ${props => props.theme.fonts.inter18Bold.size};
  font-weight: ${props =>
    props.theme.fonts.inter18Bold.weight};
  line-height: ${props =>
    props.theme.fonts.inter18Bold.lineHeight};
`;
export const DetailsButton = styled.button`
  background-color: ${props =>
    props.theme.colors.mediumSlateBlue};
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const DetailsButtonVectors = styled.img`
  padding: 1.14px 1.15px 1.15px 1.14px;
  display: flex;
  align-items: center;
  width: 13.71px;
  height: 13.71px;
`;
export const CardContainerAddress = styled.div`
  display: flex;
  align-items: center;
  width: 375px;
`;
export const CardContainerAddressVectors = styled.img`
  width: 17.29px;
  height: 23.08px;
  margin-right: 10px;
`;
export const CardContainerAddressValue = styled.div`
  font-family: "Inter",ui-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: ${props => props.theme.colors.dimGray};
  flex: 1;
`;
export const CardContentContainerKPI = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 375px;
`;
export const CardContentContainerKPIValueContainer = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 187px;
  align-self: stretch;
`;
export const CardContentContainerKPIValueContainerDescription = styled.div`
  font-family: "Inter",system-ui;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: ${props => props.theme.colors.mediumSlateBlue};
  text-align: center;
  padding: 10px;
`;
export const Value1 = styled.div`
  background-color: ${props =>
          props.theme.colors.sandyBrown};
  border-radius: 10px;
  padding: 6px;
  height: 22px;
  width: 140px;
  /*display: flex;
  align-items: center;*/
  color: ${props => props.theme.colors.mediumSlateBlue};
  text-align: center;
  font-family: ${props =>
    props.theme.fonts.inter18Medium.family};
  font-size: ${props =>
    props.theme.fonts.inter18Medium.size};
  font-weight: ${props =>
    props.theme.fonts.inter18Medium.weight};
  line-height: ${props =>
    props.theme.fonts.inter18Medium.lineHeight};
`;