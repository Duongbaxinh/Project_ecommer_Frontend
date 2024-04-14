import { Box, Flex, Image, useTheme } from '@chakra-ui/react';
import React from 'react';
import { GAP_SPACE, POSITION } from '../../../theme/webFoundation';
import Price from '../../micro/Price';
import RadioScroll from '../../micro/RadioScroll';

function CardProduct({ product_thumbnail, product_price, product_purchase }) {
    const theme = useTheme()
    return (
        <Flex maxW='144px'
            maxH='200px'
            gap={GAP_SPACE.gap5}
            {...POSITION.flexCenter()}

        >
            <Box w='140px' h='140px'>
                <Image src={product_thumbnail} objectFit='cover' />
            </Box>
            <Price product_price={product_price.toLocaleString('vi-VN')} />
            <RadioScroll />
        </Flex>
    );
}

export default CardProduct;