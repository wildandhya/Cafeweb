import Axios from 'axios'

export const getProductApi = ()=>{
    return Axios.get('http://localhost:8000/product')
}

