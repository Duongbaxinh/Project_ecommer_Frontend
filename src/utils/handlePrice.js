export const totalPrice = (products) => {
    const totalValue = products.reduce((total, product) => {
        return total + product.product_price * product.quantity
    }, 0)
    return totalValue
}
export const totalDiscount = (products) => {
    const totalDiscount = products.reduce((total, product) => {
        return total + (product.product_price * product.product_discount) / 100
    }, 0)
    return totalDiscount
}
export const finalPrice = (products, shipping) => {
    const totalvalue = totalPrice(products)
    const discountValue = totalDiscount(products)

    return (totalvalue + shipping) - discountValue
}


export const finalPriceCart = (carts, shipping) => {
    const totalvalue = totalPriceCart(carts)
    // const discountValue = totalDiscount(carts.product_id)

    return (totalvalue + shipping)
}
export const totalPriceCart = (carts) => {
    const totalValue = carts.reduce((total, cart) => {
        return total + cart.product_id.product_price * cart.quantity_count
    }, 0)
    return totalValue
}