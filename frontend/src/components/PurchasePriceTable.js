import {
    StyledTable,
    THead, TFoot, TBody,
    TR, TH,TD
} from "../styles/PropertyDetailsTable.style";

export default function PurchasePriceTable({property}) {

    return (
        <StyledTable>
            <THead>
                <TR>
                    <TH>Heading 1</TH>
                    <TH>Heading 2</TH>
                </TR>
            </THead>
            <TBody>
                <TR>
                    <TD> Purchase Price</TD>
                    <TD>{property.purchasePrice}</TD>
                </TR>
                <TR>
                    <TD>data 3</TD>
                    <TD>data 4</TD>
                </TR>
            </TBody>
        </StyledTable>
    )
}