import { CheckCircleIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { COLOR } from '../../../theme/webColor';
import { Text14 } from '../../../styles/mixin/TextCustom';

function ListSpecial({ title }) {
    return (
        <Flex alignItems='flex-start' gap='8px'>
            <CheckCircleIcon
                marginTop='5px'
                w='16px'
                h='16px'
                color={COLOR.blue[200]} />
            <Text14 title={title} />
        </Flex>
    );
}

export default ListSpecial;