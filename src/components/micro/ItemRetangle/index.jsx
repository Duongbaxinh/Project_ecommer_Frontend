import { Box, Flex, Image, Text, useTheme } from '@chakra-ui/react';
import React from 'react';
import { Text14 } from '../../../styles/mixin/TextCustom';
import { PADDING } from '../../../theme/webFoundation';

function ItemRetangle({ icon, title, onFn, padding = PADDING.sym0716, ...rest }) {
    const theme = useTheme()
    return (
        <Box
            {...rest}
            onClick={onFn}
            borderRadius={theme.styles.borderRadius.radius8}
            width='100%'
            padding={padding}
            cursor='pointer'
            _hover={{
                backgroundColor: `${theme.colors.grey[200]}`
            }}
        >
            <Flex gap='5px' placeItems='center' >
                {icon}
                <Text14 title={title} />
            </Flex>
        </Box>
    );
}

export default ItemRetangle;