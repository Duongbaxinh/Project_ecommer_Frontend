import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { GAP_SPACE, POSITION } from '../../../theme/webFoundation';
import Price from '../../micro/Price';
import RadioScroll from '../../micro/RadioScroll';

function CardProduct({ product_thumbnail, product_price, product_purchase }) {
    return (
        <Flex maxW='144px'
            maxH='200px'
            gap={GAP_SPACE.gap5}
            {...POSITION.flexCenter()}
        >
            <Box w='140px' h='140px'>
                <Image src={product_thumbnail} objectFit='cover' />
            </Box>
            <Price product_price={product_price} />
            <RadioScroll />
        </Flex>
    );
}

export default CardProduct;