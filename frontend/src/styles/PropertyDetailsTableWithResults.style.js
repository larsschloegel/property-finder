import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  background-color: ${props => props.theme.colors.white};
  border-spacing: 0;
  margin-bottom: 20px;
  border-radius: 20px 20px 20px 20px;
  
  thead, tfoot{
    text-align: left;
    font-family: ${props => props.theme.fonts.inter18Bold.family};
    font-size: ${props => props.theme.fonts.inter18Bold.size};
    font-weight: ${props => props.theme.fonts.inter18Bold.weight};
    line-height: ${props => props.theme.fonts.inter18Bold.lineHeight};
  }
  tbody{
    font-family: ${props => props.theme.fonts.inter14Medium.family};
    font-size: ${props => props.theme.fonts.inter14Medium.size};
    font-weight: ${props => props.theme.fonts.inter14Medium.weight};
    line-height: ${props => props.theme.fonts.inter14Medium.lineHeight};
  }
  td,th {
    padding: 10px;
    border: 1px groove ${props => props.theme.colors.grey40};
  }
  th {
    background-color: ${props => props.theme.colors.greySecondary};
    color: ${props => props.theme.colors.blackPrimary};
  }
  tfoot th{
    :first-child{
      border-bottom-left-radius: 20px;
    }
    :last-child{
      border-bottom-right-radius: 20px;
    }
    border: 1px groove ${props => props.theme.colors.greySecondary};
    border-top: none;
    :nth-child(2){
      text-align: right;
    }
  }
  thead th{
    :first-child{
      border-top-left-radius: 20px;
    }
    :last-child{
      border-top-right-radius: 20px;
    }
    border: 1px groove ${props => props.theme.colors.greySecondary};
    border-bottom: none;
  }
  tbody td {
    :nth-of-type(2){
      background-color: ${props => props.theme.colors.ligthSlateBlue};
      text-align: right;
    }
  }

`;
