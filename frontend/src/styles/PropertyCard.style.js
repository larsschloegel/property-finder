import styled from "styled-components";

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${props => props.theme.colors.white};
  border-radius: 8px;
  margin: 12px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 16px;
`;

export const CardImageWrapper = styled.div`
  flex: 2;
  width: 100%;
  margin-bottom: 10px;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  transition: opacity 0.5s;
  object-position: center;
  object-fit: cover;
  border-radius: 10px;
`;
export const CardContentWrapper = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const CardSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
export const Divider = styled.div`
  height: 3px;
  background-color: ${props => props.theme.colors.mediumSlateBlue};
  margin: 10px 0px 10px 0px;
`;

export const CardTitle = styled.h2`
  flex: 1;
  color: ${props => props.theme.colors.blackPrimary};
  font-family: ${props => props.theme.fonts.inter18Bold.family};
  font-size: ${props => props.theme.fonts.inter18Bold.size};
  font-weight: ${props => props.theme.fonts.inter18Bold.weight};
  line-height: ${props => props.theme.fonts.inter18Bold.lineHeight};
`;
export const ButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.mediumSlateBlue};
  border-radius: 8px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 3px 0 rgba(38, 50, 56, 0.2), 0 3px 6px 0 rgba(38, 50, 56, 0.08);
`;
export const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const AddressImageWrapper = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: flex-start;
  margin-right: 2px;
`;
export const Address = styled.span`
  font-family: ${props => props.theme.fonts.inter14Medium.family};
  font-size: ${props => props.theme.fonts.inter14Medium.size};
  font-weight: ${props => props.theme.fonts.inter14Medium.weight};
  line-height: ${props => props.theme.fonts.inter14Medium.lineHeight};
  color: ${props => props.theme.colors.dimGray};
  flex: 1;
`;
export const KPIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const KPITitle = styled.span`
  font-family: ${props => props.theme.fonts.inter14Bold.family};
  font-size: ${props => props.theme.fonts.inter14Bold.size};
  font-weight: ${props => props.theme.fonts.inter14Bold.weight};
  line-height: ${props => props.theme.fonts.inter14Bold.lineHeight};
  margin-bottom: 8px;
  color: ${props => props.theme.colors.mediumSlateBlue};
`;
export const KPI = styled.span`
  font-family: ${props => props.theme.fonts.inter14Medium.family};
  font-size: ${props => props.theme.fonts.inter14Medium.size};
  font-weight: ${props => props.theme.fonts.inter14Medium.weight};
  line-height: ${props => props.theme.fonts.inter14Medium.lineHeight};
  background-color: #FFEAA7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  color: ${props => props.theme.colors.mediumSlateBlue};
`;

