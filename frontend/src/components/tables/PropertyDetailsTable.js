import {
    StyledTableWithResults
} from "../../styles/TableWithResults.style";
import {StyledTableWithoutResults} from "../../styles/TableWithoutResults";

export default function PropertyDetailsTable({property, units}) {

    return (
        <div>
            <StyledTableWithResults>
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
            </StyledTableWithResults>
            <StyledTableWithoutResults>
                <thead>
                <tr>
                    <th colSpan={3}>Funding Calculation</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> Bank loan</td>
                    <td>{property.bankLoan}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Initial Repayment</td>
                    <td>{property.initialRepayment}</td>
                    <td>{units.percent}</td>
                </tr>
                <tr>
                    <td> Interest rate</td>
                    <td>{property.interestRate}</td>
                    <td>{units.percent}</td>
                </tr>
                <tr>
                    <td> Credit rate (year)</td>
                    <td>{property.creditRateYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Credit rate (month)</td>
                    <td>{property.creditRateMonth}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> equity capital</td>
                    <td>{property.equityCapital}</td>
                    <td>{units.euro}</td>
                </tr>
                </tbody>
            </StyledTableWithoutResults>
            <StyledTableWithoutResults>
                <thead>
                <tr>
                    <th colSpan={3}>Market and real estate data</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> Net rent (per month)</td>
                    <td>{property.netRentMonth}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> net rent (per year)</td>
                    <td>{property.netRentYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> size</td>
                    <td>{property.size}</td>
                    <td></td>
                </tr>
                <tr>
                    <td> Maintenance cost and improvements</td>
                    <td>{property.maintenanceCostAndImprovementsFactor}</td>
                    <td></td>
                </tr>
                <tr>
                    <td> Management fee per year</td>
                    <td>{property.managementFeeYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Vacancy Rate</td>
                    <td>{property.vacancyRateFactor}</td>
                    <td>{units.percent}</td>
                </tr>
                <tr>
                    <td> street</td>
                    <td>{property.address.street}</td>
                    <td></td>
                </tr>
                <tr>
                    <td> number</td>
                    <td>{property.address.number}</td>
                    <td></td>
                </tr>
                <tr>
                    <td> PLZ</td>
                    <td>{property.address.PLZ}</td>
                    <td></td>
                </tr>
                <tr>
                    <td> State</td>
                    <td>{property.address.state}</td>
                    <td></td>
                </tr>
                <tr>
                    <td> Contact person</td>
                    <td>{property.contactPerson}</td>
                    <td></td>
                </tr>
                <tr>
                    <td> exposeURL</td>
                    <td>{property.exposeURL}</td>
                    <td></td>
                </tr>
                </tbody>
            </StyledTableWithoutResults>
            <StyledTableWithResults>
                <thead>
                <tr>
                    <th colSpan={3}>Net Return calculation</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> Price per size incl. additional cost</td>
                    <td>{property.pricePerSizeInclAdditionalCost}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Net rent per size per month</td>
                    <td>{property.netRentPerSizePerMonth}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Net rent per size per year</td>
                    <td>{property.netRentPerSizePerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Net rent (per year)</td>
                    <td>{property.netRentYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Adjusted annual net rent</td>
                    <td>{property.adjustedAnnualNetRent}</td>
                    <td>{units.percent}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th>Adjusted net return</th>
                    <th>{property.adjustedNetReturn}</th>
                    <th>{units.percent}</th>
                </tr>
                </tfoot>
            </StyledTableWithResults>
            <StyledTableWithResults>
                <thead>
                <tr>
                    <th colSpan={3}>Cash Flow calculation</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> Net Operating Income (year)</td>
                    <td>{property.netRentYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Maintenance cost and improvements</td>
                    <td>{property.maintenanceCostAndImprovementsYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Management fee (year)</td>
                    <td>{property.managementFeeYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Vacancy rate</td>
                    <td>{property.vacancyRate}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Improvements per month</td>
                    <td>{property.improvementsMonth}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Improvements per year</td>
                    <td>{property.improvementsYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> CFBT year</td>
                    <td>{property.CFBTYear}</td>
                    <td>{units.euro}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th>Cash Flow Before Taxes per month</th>
                    <th>{property.CFBTMonth}</th>
                    <th>{units.euro}</th>
                </tr>
                </tfoot>
            </StyledTableWithResults>
        </div>

    )
}