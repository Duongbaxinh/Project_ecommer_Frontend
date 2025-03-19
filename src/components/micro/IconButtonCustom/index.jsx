import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { BORDER_RADIUS } from '../../../theme/webFoundation';

function IconButtonCustom({
    onFc,
    borderRadius
    , children, ...rest }) {
    return (
        <IconButton {...rest} size='sm' borderRadius={!borderRadius ? BORDER_RADIUS.radiusCircle : borderRadius}
            onClick={onFc}  >
            {children}
        </IconButton>
    );
}

export default IconButtonCustom;