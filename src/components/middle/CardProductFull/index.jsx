import { Flex, Image, useTheme } from '@chakra-ui/react';
import React from 'react';
import TIKIBEST from '../../../public/icons/best.png';
import TAG_GENUINE from '../../../public/icons/genuine.png';
import BoxRadius from '../../micro/BoxRadius/BoxRadius';

import { Text10, Text12 } from '../../../styles/mixin/TextCustom';
import Price from '../../micro/Price';
import { StarIcon } from '@chakra-ui/icons';
import TagGenuine from '../../micro/TagGenuine';

function CardProductFull({ product_name, product_price, product_thumbnail, product_genuine, product_best }) {
    const theme = useTheme()
    return (
        <BoxRadius
            maxW='156px'
            minH='280px'
            borderWidth='0.5px'
            boxShadow={`0.5px 0.5px 2px ${theme.colors.grey[200]}`}
            cursor='pointer'
        >
            <Flex flexDir='column' justifyContent='flex-start' gap='5px'
                paddingBottom='25px'
                borderBottom={`0.5px solid ${theme.colors.grey[200]}`}
            >
                <Image src={product_thumbnail} maxW='143px' maxH='143px' cursor='pointer' />
                <Flex minH='40px' justifyContent='flex-start'>
                    {product_genuine && <TagGenuine />}
                    {product_best && <Image src={TIKIBEST} height='20px' w='89px' />}
                </Flex>
                <Text12 title={product_name} noOfLines={2} />
                <Flex>
                    <StarIcon w='10px' color={theme.colors.yellow[200]} />
                    <StarIcon w='10px' color={theme.colors.yellow[200]} />
                    <StarIcon w='10px' color={theme.colors.yellow[200]} />
                    <StarIcon w='10px' color={theme.colors.yellow[200]} />
                    <StarIcon w='10px' color={theme.colors.yellow[200]} />
                </Flex>
                <Price product_price={product_price} />
            </Flex>
            <Text10 title={'giao thứ 2, 19/02'} color={theme.colors.grey[400]} />

        </BoxRadius>
    );
}

export default CardProductFull;