import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Text12 } from '../../../styles/mixin/TextCustom';

function Chip({ leading, title, trailing }) {
    return (
        <Flex gap='5px'>

            {trailing}
            <Text12 title={title} />
            {trailing && trailing}
        </Flex>
    );
}

export default Chip;