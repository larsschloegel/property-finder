import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPropertyBy} from "../service/property-api-service";


export default function useSingleProperty(){
    const {id}= useParams()
    const[property, setProperty] = useState()

    useEffect(()=> {
        getPropertyBy(id)
            .then((response) => response)
            .then((data) => setProperty(data))
    }, [id])

    return {property}
}