import Axios from 'axios'

export const getProductApi = ()=>{
    return Axios.get('http://localhost:8000/product')
}


export const incomeToday = ()=>{
    return Axios.get('http://localhost:8000/history/income-today')
}
export const orderByWeek = ()=>{
    return Axios.get('http://localhost:8000/history/order-week')
}
export const incomeByYear = ()=>{
    return Axios.get('http://localhost:8000/history/income-year')
}

