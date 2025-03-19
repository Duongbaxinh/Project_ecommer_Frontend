import { Box, Text } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import React from 'react';
import { BORDER_RADIUS, POSITION } from '../../../theme/webFoundation';
import { Text10, Text11, Text12, Text14 } from '../../../styles/mixin/TextCustom'
import { COLOR } from '../../../theme/webColor';
function RadioScroll(props) {
    const theme = useTheme()
    return (
        <Box width='100%' height='15px' maxH='15px'
            borderRadius={BORDER_RADIUS.radius16}
            position='relative'
            backgroundColor={theme.colors.red[100]}
        >
            <Box width='10%'
                height='inherit'
                positision='absolute'
                borderRadius={BORDER_RADIUS.radius16}
                backgroundColor={theme.colors.red[200]} >
            </Box>
            <Text10 title={'Vừa mở bán'}
                textAlign='center'
                lineHeight='1.2'
                fontWeight='500'
                color={COLOR.white}
                {...POSITION.center}
            />

        </Box >
    );
}

export default RadioScroll;