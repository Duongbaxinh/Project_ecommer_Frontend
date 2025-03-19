import { Flex, Text, useTheme } from '@chakra-ui/react';
import React from 'react';
import { Text16 } from '../../../styles/mixin/TextCustom';
import { FONT_SIZE } from '../../../theme/webFontSize';

function Price({ product_price, ...rest }) {
    const theme = useTheme()
    return (
        <Flex >
            <Text {...rest}>{Number(product_price).toLocaleString('vi-VN')}</Text>
            <sub><Text >đ</Text></sub></Flex>
    );
}

export default Price;