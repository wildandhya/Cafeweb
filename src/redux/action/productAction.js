import {getProductApi} from '../../utils/http'
// import Axios from 'axios'
import {getAllproduct} from './actionType'

export const fetchProduct = ()=>{
    return {
        type:getAllproduct,
        payload:getProductApi()
        }
    
}

