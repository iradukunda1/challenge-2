import axios from "axios"

export default axios.create({
    baseURL:'https://nelly-challenge3.herokuapp.com/api/v1/album'
})