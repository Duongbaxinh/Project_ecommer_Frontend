import { Box } from '@chakra-ui/react';
import React from 'react';
import { COLOR } from '../../../theme/webColor';
import { BORDER_RADIUS, PADDING } from '../../../theme/webFoundation';
function BoxRadius({
    backgroundColor = COLOR.white,
    padding = PADDING.all8,
    borderRadius = BORDER_RADIUS.radius8,
    children, ...rest }) {
    return (
        <Box
            ref={rest.eRef && rest.eRef}
            {...rest}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            padding={padding}
        >
            {children}
        </Box>
    );
}

export default BoxRadius;