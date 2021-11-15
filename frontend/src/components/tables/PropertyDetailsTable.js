import {StyledTableWithResults} from "../../styles/TableWithResults.style";
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
                    <td>{property.purchasePriceInEuro}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
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
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th>Sum</th>
                    <th>{property.overallPurchasePriceInEuro}</th>
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
                    <td>{property.bankLoanInEuro}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Initial Repayment</td>
                    <td>{property.initialRepaymentInPercent}</td>
                    <td>{units.percent}</td>
                </tr>
                <tr>
                    <td> Interest rate</td>
                    <td>{property.interestRateInPercent}</td>
                    <td>{units.percent}</td>
                </tr>
                <tr>
                    <td> Credit rate (year)</td>
                    <td>{property.creditRateInEuroPerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Credit rate (month)</td>
                    <td>{property.creditRateInEuroPerMonth}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> equity capital</td>
                    <td>{property.equityCapitalInEuro}</td>
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
                    <td>{property.netRentInEuroPerMonth}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> net rent (per year)</td>
                    <td>{property.netRentInEuroPerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> size</td>
                    <td>{property.sizeInSquareMeter}</td>
                    <td>m2</td>
                </tr>
                <tr>
                    <td> Maintenance cost and improvements</td>
                    <td>{property.maintenanceCostAndImprovementFactorInEuroPerSquareMeterPerYear}</td>
                    <td> </td>
                </tr>
                <tr>
                    <td> Management fee per year</td>
                    <td>{property.managementFeeInEuroPerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Vacancy Rate</td>
                    <td>{property.vacancyRateInPercent}</td>
                    <td>{units.percent}</td>
                </tr>
                <tr>
                    <td> PLZ</td>
                    <td>{property.plz}</td>
                    <td> </td>
                </tr>
                <tr>
                    <td> State</td>
                    <td>{property.state}</td>
                    <td> </td>
                </tr>
                <tr>
                    <td> Contact person</td>
                    <td>{property.contactPerson}</td>
                    <td> </td>
                </tr>
                <tr>
                    <td> exposeURL</td>
                    <td>{property.exposeUrl}</td>
                    <td> </td>
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
                    <td>{property.pricePerSizeInclAdditionalCostInEuroPerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Net rent per size per month</td>
                    <td>{property.netRentPerSizeInEuroPerMonth}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Net rent per size per year</td>
                    <td>{property.netRentPerSizeInEuroPerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Net rent (per year)</td>
                    <td>{property.netRentInEuroPerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Adjusted annual net rent</td>
                    <td>{property.adjustedNetRentInEuroPerYear}</td>
                    <td>{units.percent}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th>Adjusted net return</th>
                    <th>{property.adjustedNetReturnInPercent}</th>
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
                    <td> Maintenance cost and improvements</td>
                    <td>{property.maintenanceCostAndImprovementInEuroPerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Management fee (year)</td>
                    <td>{property.managementFeeInEuroPerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Vacancy rate</td>
                    <td>{property.vacancyRateInEuroPerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Improvements per month</td>
                    <td>{property.improvementsInEuroPerMonth}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> Improvements per year</td>
                    <td>{property.improvementsInEuroPerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                <tr>
                    <td> CFBT year</td>
                    <td>{property.cfbtInEuroPerYear}</td>
                    <td>{units.euro}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th>Cash Flow Before Taxes per month</th>
                    <th>{property.cfbtInEuroPerMonth}</th>
                    <th>{units.euro}</th>
                </tr>
                </tfoot>
            </StyledTableWithResults>
        </div>

    )
}