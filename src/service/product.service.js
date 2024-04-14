import axios from 'axios';
import { totalPrice } from '../utils/handlePrice';

export const fetchAllProduct = async () => {
    try {
        return await axios.get('http://127.0.0.1:8000/api/v1/product/')
    } catch (error) {
        console.log(error)
    }
}

export const fetchDetailProduct = async (id_product) => {
    try {
        console.log('check prdouct run at here')
        const product = await axios.get(`http://127.0.0.1:8000/api/v1/product/${id_product}/`)
        const images = await axios.get(`http://127.0.0.1:8000/api/v1/product/${id_product}/images/`)
        const sameProduct = await axios.get(`http://127.0.0.1:8000/api/v1/product/${product.data.data['category_id']}/category/`)
        product.data.data['images'] = images.data.data
        product.data.data['same_product'] = sameProduct.data.data
        console.log('check product detail :::: ', product.data.data)
        return product.data.data
    } catch (error) {
        console.log(error)
    }
}

export const checkout = async ({ id_cart, type }) => {
    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        return await axios.put(`http://127.0.0.1:8000/api/v1/cart/${id_cart}/`, { type: type }, { headers: { Authorization: `Bearer ${accessToken}` } })
    } catch (error) {
        console.log('error :::: ', error)
    }
}
export const handleOrder = async (data) => {
    try {
        return axios.post('http://127.0.0.1:8000/api/v1/orders/', { ...data })
    } catch (error) {
        console.log('check error :::: ', error)
    }
}
export const handleLoginService = async (data) => {
    try {
        const { data: dataUser } = await axios.post('http://127.0.0.1:8000/api/v1/jwt/create', { ...data })


        return dataUser
    } catch (error) {
        console.log('check error :::: ', error)
    }
}
export const handleProfileService = async (accessToken) => {
    try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/v1/users/profile/',
            { headers: { Authorization: `Bearer ${accessToken}` } })
        return data
    } catch (error) {
        console.log('check error :::: ', error)
    }
}

export const handleCartService = async () => {
    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        const { data } = await axios.get('http://127.0.0.1:8000/api/v1/cart/', { headers: { Authorization: `Bearer ${accessToken}` } })
        return data
    } catch (error) {

    }
}
export const handleDeleteCartService = async (idCart) => {
    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        const { data } = await axios.delete(`http://127.0.0.1:8000/api/v1/cart/${idCart}/`, { headers: { Authorization: `Bearer ${accessToken}` } })
        return data
    } catch (error) {

    }
}

export const getAllOrder = async () => {
    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        const { data } = await axios.get('http://127.0.0.1:8000/api/v1/orders/', { headers: { Authorization: `Bearer ${accessToken}` } })
        return data
    } catch (error) {

    }
}

export const handleDeleteOrder = async (orderId) => {
    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        const { data } = await axios.delete(`http://127.0.0.1:8000/api/v1/orders/${orderId}/`, { headers: { Authorization: `Bearer ${accessToken}` } })
        return data
    } catch (error) {

    }
}

export const addToCart = async ({ idProduct, quantity_count }) => {
    alert(quantity_count, idProduct)
    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        const { data } = await axios.post(`http://127.0.0.1:8000/api/v1/cart/`,
            { prid: idProduct, quantity_count: quantity_count },
            { headers: { Authorization: `Bearer ${accessToken}` } })
        return data
    } catch (error) {

    }
}