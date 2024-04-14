import { Flex, HStack, theme } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Text14, Text16 } from '../../../styles/mixin/TextCustom';
import BoxRadius from '../../micro/BoxRadius/BoxRadius';
import OutlineButton from '../../micro/OutLineButton';
import TimeCount from '../../micro/TimeCount';
import GroupButton from '../../middle/GroupButton';

function ListTemplate({ children, time, leading, trailing, listButton, typeCataloge }) {
    const [isSelected, setIsSelected] = useState(() => {
        if (listButton) {
            return listButton[0]
        } else {
            return ''
        }
    })
    const handleSelected = (value) => {
        setIsSelected(value)
    }
    useEffect(() => {

    }, [isSelected])
    return (
        <BoxRadius display='flex' flexDirection='column' gap='15px'>
            <Flex justifyContent='space-between'>
                <HStack>
                    <Text16 title={leading} fontWeight='500' />
                    {time && <TimeCount
                        hour={time.hour}
                        minuts={time.minuts}
                    />}
                </HStack>
                <Text14 title={trailing}
                    fontWeight='400'
                    color={theme.colors.blue[200]}
                    cursor='pointer'
                />
            </Flex>
            {listButton && <GroupButton>
                {listButton.map((item) => (
                    <OutlineButton key={item}
                        isSelected={item.toLowerCase() === isSelected.toLowerCase()}
                        onSelected={handleSelected}
                        title={item}
                    >
                    </OutlineButton>
                ))}
            </GroupButton>}
            {children}
        </BoxRadius>
    );
}

export default ListTemplate;