import { defineStyleConfig } from '@chakra-ui/react';
import { COLOR } from './webColor';
import { BORDER_RADIUS } from './webFoundation';

export const Button = defineStyleConfig({
    // The styles all button have in common
    baseStyle: {
        fontWeight: 'normal',
        textTransform: 'capitalize',
        borderColor: COLOR.black,
        backgroundColor: COLOR.white,
        borderRadius: BORDER_RADIUS.radius16,
        _hover: {
            backgroundColor: COLOR.grey[400]
        }
    },
    sizes: {
        sm: {
            px: '8px',
            py: '8px'
        }
    },
    variants: {
        outline: {
            border: '0.5px black solid',
            borderColor: COLOR.grey[200],
            color: COLOR.black,
            borderRadius: BORDER_RADIUS.radius16,
        },
        solid: {
            borderColor: COLOR.grey[200],
            color: COLOR.black,
        },
    },
    defaultProps: {
        size: 'md',
        variant: 'outline',
    },
});
