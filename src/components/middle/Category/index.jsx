import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { BORDER_RADIUS, BORDER_WIDTH, GAP_SPACE, PADDING } from '../../../theme/webFoundation';
import { Text14 } from '../../../styles/mixin/TextCustom';

function Category({ img_url, title }) {
    return (
        <Flex flexDir='column'
            gap={GAP_SPACE.gap5} justifyContent='center'
            alignItems='center' >
            <Box borderRadius={BORDER_RADIUS.radius16}
                borderWidth={BORDER_WIDTH.bw1}
                padding={PADDING.all8}
                w='64px'
                h='64px'
            >
                <Image src={img_url} alt='#'
                    width='100%'
                    height='100%'
                    objectFit='cover'
                />
            </Box>
            <Text14 title={title} fontWeight='400' />
        </Flex >
    );
}

export default Category;