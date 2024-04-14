import { Flex } from '@chakra-ui/react';
import React from 'react';

function GroupButton({ children }) {
    return (
        <Flex alignItems='center' justifyContent='flex-start' gap='10px' >
            {children}
        </Flex>
    );
}

export default GroupButton;