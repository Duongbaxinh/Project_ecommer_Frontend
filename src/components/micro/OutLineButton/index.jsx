import { Button, useTheme } from '@chakra-ui/react';
import React from 'react';
import { PADDING } from '../../../theme/webFoundation';
import { COLOR } from '../../../theme/webColor';
import { Text14 } from '../../../styles/mixin/TextCustom';

function OutlineButton({ children, title, isSelected, onSelected }) {
    const theme = useTheme()
    return (
        <Button
            w='fit-content'
            maxH='30px'
            padding='0px 10px'
            borderColor={theme.colors.grey[300]}
            variant='outline'
            color={isSelected ? theme.colors.blue[200] : null}
            fontWeight={isSelected ? '500' : ''}
            onClick={() => onSelected(title)}
            _hover={{
                backgroundColor: COLOR.grey[200]
            }}
        >
            <Text14 title={title} />
        </Button>
    );
}

export default OutlineButton;