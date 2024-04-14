import { Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScroll';
import { fetchDetailProduct } from '../../service/product.service';
import DetailProduct from './DetailProduct';
import OverviewProduct from './OverviewProduct';
import Purcharse from './Purcharse';

function DetailProductPage(props) {

    const changePosition = useScrollPosition()
    const [bg, setBg] = useState('')
    const { id } = useParams()
    const handleShowBackground = (value) => {
        setBg(value)
    }
    const { data: product, isLoading, isError } = useQuery({ queryKey: 'productDetail', queryFn: () => fetchDetailProduct(id) })
    if (isLoading) return <h1>Loading....</h1>
    return (
        <Flex>
            <OverviewProduct
                changePosition={changePosition}
                product={product} bg={bg}
                onShowBackground={handleShowBackground}
            />
            <DetailProduct product={product} />
            <Purcharse changePosition={changePosition} product={product} />
        </Flex>
    );
}

export default DetailProductPage;