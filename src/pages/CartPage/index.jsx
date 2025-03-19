import { Flex } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import { handleCartService, handleDeleteCartService } from '../../service/product.service';
import ListProduct from './ListProduct';
import Order from '../PaymentPage/Order';
import OrderCart from './OrderCart';

function CartPage({ user, token }) {
    const [load, setLoad] = useState(false)
    const { mutate } = useMutation({
        mutationFn: (idCart) => {
            return handleDeleteCartService(idCart)
        },
        onSuccess: () => {
            setLoad(!load)
        }
    })
    const { data, isLoading, isError } = useQuery({ queryKey: ['carts', load], queryFn: () => handleCartService() })
    if (isLoading) return <h1>Loading ....</h1>

    const handleDeteleCart = (idCart) => {
        mutate(idCart)
    }
    const products = data.data.flatMap((cart) => cart.product_id)

    return (
        <Flex gap='20px'>
            <ListProduct carts={data.data} onDeleteCart={handleDeteleCart} load={load} setLoad={setLoad} />
            <OrderCart carts={data.data} user={user} />
        </Flex>
    );
}

export default CartPage;