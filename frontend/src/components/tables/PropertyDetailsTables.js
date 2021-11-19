import PropertyDetailsTableWithResults from "./PropertyDetailsTableWithResults";
import PropertyDetailsTableWithoutResults from "./PropertyDetailsTableWithoutResults";

export default function PropertyDetailsTables({property, units}) {

    return (
        <div>
            <PropertyDetailsTableWithoutResults
                title={"Inputs market"}
                rows={[
                    {
                        title: "net rent per size",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.netRentPerSizeInEuroPerYear),
                        unit: units.euroPerSquareMeterPerYear
                    },
                    {
                        title: "net rent per size",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.netRentPerSizeInEuroPerMonth),
                        unit: units.euroPerSquareMeterPerMonth
                    },
                    {
                        title: "size of house or apartment",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.sizeInSquareMeter),
                        unit: units.squareMeter
                    },
                    {
                        title: "maintenance and improvement cost",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.maintenanceCostAndImprovementFactorInEuroPerSquareMeterPerYear),
                        unit: units.euroPerSquareMeterPerYear
                    },
                    {
                        title: "mangement fee",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.managementFeeInEuroPerYear),
                        unit: units.euroPerYear
                    },
                    {
                        title: "vacancy rate",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.vacancyRateInPercent),
                        unit: units.percent
                    }

                ]}/>
            <PropertyDetailsTableWithResults
                title={"Purchase Price"}
                rows={[
                    {
                        title: "purchase price",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.purchasePriceInEuro),
                        unit: units.euro
                    },
                    {
                        title: "real estate agent fees",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.realEstateAgentFeeInEuro),
                        unit: units.euro
                    },
                    {
                        title: "real estate transfer tax",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.realEstateTransferTaxInEuro),
                        unit: units.euro
                    },
                    {
                        title: "notary fee",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.notaryFeeInEuro),
                        unit: units.euro
                    },
                    {
                        title: "sum additial purchase cost",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.sumAdditionalPurchaseCostInEuro),
                        unit: units.euro
                    }
                ]}
                footer={{title: "Sum", value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.overallPurchasePriceInEuro), unit: units.euro}}/>
            <PropertyDetailsTableWithoutResults
                title={"Funding Calculation"}
                rows={[
                    {
                        title: "bank loan",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.bankLoanInEuro),
                        unit: units.euro
                    },
                    {
                        title: "initial repayment",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.initialRepaymentInPercent),
                        unit: units.percent
                    },
                    {
                        title: "interest rate",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.interestRateInPercent),
                        unit: units.percent
                    },
                    {
                        title: "credit rate per year",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.creditRateInEuroPerYear),
                        unit: units.euroPerYear
                    },
                    {
                        title: "credit rate per month",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.creditRateInEuroPerMonth),
                        unit: units.euroPerMonth
                    },
                    {
                        title: "equity capital",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.equityCapitalInEuro),
                        unit: units.euro
                    }

                ]}/>
            <PropertyDetailsTableWithResults
                title={"Net Return Calculation"}
                rows={[
                    {
                        title: "net rent per year",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.netRentInEuroPerYear),
                        unit: units.euroPerYear
                    },
                    {
                        title: "vacancy",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.vacancyRateInEuroPerYear),
                        unit: units.euroPerYear
                    },
                    {
                        title: "cost improvements and maintenance",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.maintenanceCostAndImprovementInEuroPerYear),
                        unit: units.euroPerYear
                    },
                    {
                        title: "management fee",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.managementFeeInEuroPerYear),
                        unit: units.euroPerYear
                    },
                    {
                        title: "adjusted net rent per year",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.adjustedNetRentInEuroPerYear),
                        unit: units.euroPerYear
                    },
                    {
                        title: "overall purchase price",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.overallPurchasePriceInEuro),
                        unit: units.euro
                    }
                ]}
                footer={{title: "Adjusted net return", value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.adjustedNetReturnInPercent), unit: units.percent}}/>
            <PropertyDetailsTableWithResults
                title={"Cash Flow Calculation"}
                rows={[
                    {
                        title: "net rent per year",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.netRentInEuroPerYear),
                        unit: units.euroPerYear
                    },
                    {
                        title: "operating cost per year",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.operatingCostPerYear),
                        unit: units.euroPerYear
                    },
                    {
                        title: "credit rate per year",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.creditRateInEuroPerYear),
                        unit: units.euroPerYear
                    },
                    {
                        title: "cash flow per year",
                        value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.cfbtInEuroPerYear),
                        unit: units.euroPerYear
                    }
                ]}
                footer={{title: "Cash flow Before Taxes per month", value: new Intl.NumberFormat('de-DE', {maximumFractionDigits:2}).format(property.cfbtInEuroPerMonth), unit: units.euroPerMonth}}/>
        </div>

    )
}