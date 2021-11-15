import styled from 'styled-components';

export const StyledTableWithoutResults = styled.table`
  width: 100%;
  border-collapse: separate;
  background-color: ${props => props.theme.colors.white};
  border-spacing: 0;
  margin-bottom: 20px;
  border-radius: 20px 20px 20px 20px;
  table-layout: fixed;
  overflow-x: auto;
  
  thead {
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
    border-left: 1px groove ${props => props.theme.colors.grey40};
    border-top: 1px groove ${props => props.theme.colors.grey40};
  }
  th {
    background-color: ${props => props.theme.colors.greySecondary};
    color: ${props => props.theme.colors.blackPrimary};
  }
  
  thead th{
    :first-child{
      border-top-left-radius: 20px;
    }
    :last-child{
      border-top-right-radius: 20px;
    }
  }
  tbody td {
    :nth-of-type(2){
      background-color: ${props => props.theme.colors.ligthSlateBlue};
      text-align: right;
    }
  }
  td:first-child, th:first-child{
    border-left: none;
  }

`;
