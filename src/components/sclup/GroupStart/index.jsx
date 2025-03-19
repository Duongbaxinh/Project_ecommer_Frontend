import { StarIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import React from 'react';

function GroupStart({ numberOfStart, w = '20px', h = '20px' }) {
    return (
        <Flex gap='10px'>
            {Array.from({ length: 5 }, (_, i) => i + 1).map(
                function (star, index) {
                    if (numberOfStart >= star) {
                        return < StarIcon color='yellow' w={w} h={h} />
                    } else {
                        return <StarIcon color='gray' w={w} h={h} />

                    }

                }

            )}
        </Flex>
    );
}

export default GroupStart;