import axios from "axios"

export const getProperties = () => {
    return axios
        .get("/api/properties")
        .then((response) => response.data)
        .catch((error) => console.log(error))
}

export const getPropertyBy = (id) => {
    return axios
        .get(`/api/properties/${id}`)
        .then((response) => response.data)
        .catch((error) => console.log(error))
}
