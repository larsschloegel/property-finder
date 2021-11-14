import {useEffect, useState} from "react";
import {getProperties} from "../service/property-api-service";


export default function useProperties(){
    const [properties, setProperties] = useState([])

    useEffect(()=>{
        getProperties()
            .then(result => setProperties(result))
            .catch(err => console.error(err))
    }, [])
    return {properties}
}