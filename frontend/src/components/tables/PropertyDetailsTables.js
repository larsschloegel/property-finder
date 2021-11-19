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
                        value: property.netRentPerSizeInEuroPerYear,
                        unit: units.euroPerSquareMeterPerYear
                    },
                    {
                        title: "net rent per size",
                        value: property.netRentPerSizeInEuroPerMonth,
                        unit: units.euroPerSquareMeterPerMonth
                    },
                    {
                        title: "size of house or apartment",
                        value: property.sizeInSquareMeter,
                        unit: units.squareMeter
                    },
                    {
                        title: "maintenance and improvement cost",
                        value: property.maintenanceCostAndImprovementFactorInEuroPerSquareMeterPerYear,
                        unit: units.euroPerSquareMeterPerYear
                    },
                    {
                        title: "mangement fee",
                        value: property.managementFeeInEuroPerYear,
                        unit: units.euroPerYear
                    },
                    {
                        title: "vacancy rate",
                        value: property.vacancyRateInPercent,
                        unit: units.percent
                    }

                ]}/>
            <PropertyDetailsTableWithResults
                title={"Purchase Price"}
                rows={[
                    {
                        title: "purchase price",
                        value: property.purchasePriceInEuro,
                        unit: units.euro
                    },
                    {
                        title: "real estate agent fees",
                        value: property.realEstateAgentFeeInEuro,
                        unit: units.euro
                    },
                    {
                        title: "real estate transfer tax",
                        value: property.realEstateTransferTaxInEuro,
                        unit: units.euro
                    },
                    {
                        title: "notary fee",
                        value: property.notaryFeeInEuro,
                        unit: units.euro
                    },
                    {
                        title: "sum additial purchase cost",
                        value: property.sumAdditionalPurchaseCostInEuro,
                        unit: units.euro
                    }
                ]}
                footer={{title: "Sum", value: property.overallPurchasePriceInEuro, unit: units.euro}}/>
            <PropertyDetailsTableWithoutResults
                title={"Funding Calculation"}
                rows={[
                    {
                        title: "bank loan",
                        value: property.bankLoanInEuro,
                        unit: units.euro
                    },
                    {
                        title: "initial repayment",
                        value: property.initialRepaymentInPercent,
                        unit: units.percent
                    },
                    {
                        title: "interest rate",
                        value: property.interestRateInPercent,
                        unit: units.percent
                    },
                    {
                        title: "credit rate per year",
                        value: property.creditRateInEuroPerYear,
                        unit: units.euroPerYear
                    },
                    {
                        title: "credit rate per month",
                        value: property.creditRateInEuroPerMonth,
                        unit: units.euroPerMonth
                    },
                    {
                        title: "equity capital",
                        value: property.equityCapitalInEuro,
                        unit: units.euro
                    }

                ]}/>
            <PropertyDetailsTableWithResults
                title={"Net Return Calculation"}
                rows={[
                    {
                        title: "net rent per year",
                        value: property.netRentInEuroPerYear,
                        unit: units.euroPerYear
                    },
                    {
                        title: "vacancy",
                        value: property.vacancyRateInEuroPerYear,
                        unit: units.euroPerYear
                    },
                    {
                        title: "cost improvements and maintenance",
                        value: property.maintenanceCostAndImprovementInEuroPerYear,
                        unit: units.euroPerYear
                    },
                    {
                        title: "management fee",
                        value: property.managementFeeInEuroPerYear,
                        unit: units.euroPerYear
                    },
                    {
                        title: "adjusted net rent per year",
                        value: property.adjustedNetRentInEuroPerYear,
                        unit: units.euroPerYear
                    },
                    {
                        title: "overall purchase price",
                        value: property.overallPurchasePriceInEuro,
                        unit: units.euro
                    }
                ]}
                footer={{title: "Adjusted net return", value: property.adjustedNetReturnInPercent, unit: units.percent}}/>
            <PropertyDetailsTableWithResults
                title={"Cash Flow Calculation"}
                rows={[
                    {
                        title: "net rent per year",
                        value: property.netRentInEuroPerYear,
                        unit: units.euroPerYear
                    },
                    {
                        title: "operating cost per year",
                        value: property.operatingCostPerYear,
                        unit: units.euroPerYear
                    },
                    {
                        title: "credit rate per year",
                        value: property.creditRateInEuroPerYear,
                        unit: units.euroPerYear
                    },
                    {
                        title: "cash flow per year",
                        value: property.cfbtInEuroPerYear,
                        unit: units.euroPerYear
                    }
                ]}
                footer={{title: "Cash flow Before Taxes per month", value: property.cfbtInEuroPerMonth, unit: units.euroPerMonth}}/>
        </div>

    )
}