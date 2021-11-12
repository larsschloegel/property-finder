import {
    StyledTable
} from "../styles/PropertyDetailsTableWithResults.style";

export default function PropertyDetailsTableWithResults({property, units}) {

    return (

            <StyledTable>
                <thead>
                    <tr>
                        <th colSpan={3}>Purchase Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Purchase Price</td>
                        <td>{property.purchasePrice}</td>
                        <td>{units.euro}</td>
                    </tr>
                    <tr>
                        <td> Real estate agent fees</td>
                        <td>{property.realEstateAgentFees}</td>
                        <td>{units.euro}</td>
                    </tr>
                    <tr>
                        <td> Real estate transfer tax</td>
                        <td>{property.realEstateTransferTax}</td>
                        <td>{units.euro}</td>
                    </tr>
                    <tr>
                        <td> Notary fee</td>
                        <td>{property.notaryFee}</td>
                        <td>{units.euro}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Sum</th>
                        <th>{property.overallPurchasePrice}</th>
                        <th>{units.euro}</th>
                    </tr>
                </tfoot>
            </StyledTable>
    )
}