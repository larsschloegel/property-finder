import {StyledTableWithResults} from "../../styles/TableWithResults.style";


export default function PropertyDetailsTableWithResults({title, rows, footer}) {


    return (
        <StyledTableWithResults>
            <thead>
            <tr>
                <th colSpan={3}> {title}</th>
            </tr>
            </thead>
            <tbody>
            {
                rows.map(row => <tr>

                    <td> {row.title}</td>
                    <td> {row.value}</td>
                    <td> {row.unit}</td>
                </tr>)
            }

         {/*   <tr>
                <td> Real estate agent fees</td>
                <td>{property.realEstateAgentFeeInEuro}</td>
                <td>{units.euro}</td>
            </tr>
            <tr>
                <td> Real estate transfer tax</td>
                <td>{property.realEstateTransferTaxInEuro}</td>
                <td>{units.euro}</td>
            </tr>
            <tr>
                <td> Notary fee</td>
                <td>{property.notaryFeeInEuro}</td>
                <td>{units.euro}</td>
            </tr>*/}
            </tbody>
            <tfoot>
            <tr>
                <th>{footer.title}</th>
                <th>{footer.value}</th>
                <th>{footer.unit}</th>
            </tr>
           {/* <tr>
                <th>Sum</th>
                <th>{property.overallPurchasePriceInEuro}</th>
                <th>{units.euro}</th>
            </tr>*/}
            </tfoot>
        </StyledTableWithResults>
    )
}