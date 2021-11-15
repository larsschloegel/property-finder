import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPropertyBy} from "../service/property-api-service";


export default function useSingleProperty(){
    const {id}= useParams()
    const[property, setProperty] = useState({
        id:"",
        name:"",
        source:"",
        exposeUrl:"",
        contactPerson:"",
        type:"",
        imageUrl:"",
        city:"",
        plz:"",
        state:"",
        purchasePriceInEuro:"",
        realEstateAgentFeeInEuro:"",
        realEstateTransferTaxInEuro:"",
        notaryFeeInEuro:"",
        overallPurchasePriceInEuro:"",
        bankLoanInEuro:"",
        initialRepaymentInPercent:"",
        interestRateInPercent:"",
        creditRateInEuroPerYear:"",
        creditRateInEuroPerMonth:"",
        netRentInEuroPerMonth:"",
        netRentInEuroPerYear:"",
        sizeInSquareMeter:"",
        managementFeeInEuroPerYear:"",
        maintenanceCostAndImprovementFactorInEuroPerSquareMeterPerYear:"",
        vacancyRateInPercent:"",
        pricePerSizeInclAdditionalCostInEuroPerYear:"",
        netRentPerSizeInEuroPerMonth:"",
        netRentPerSizeInEuroPerYear:"",
        vacancyRateInEuroPerYear:"",
        adjustedNetRentInEuroPerYear:"",
        adjustedNetReturnInPercent:"",
        improvementsInEuroPerMonth:"",
        improvementsInEuroPerYear:"",
        cfbtInEuroPerYear:"",
        cfbtInEuroPerMonth:"",
        maintenanceCostAndImprovementInEuroPerYear:"",
        equityCapitalInEuro:""
    })

    useEffect(()=> {
        getPropertyBy(id)
            .then((response) => response)
            .then((data) => setProperty(data))
    }, [id])

    return {property}
}