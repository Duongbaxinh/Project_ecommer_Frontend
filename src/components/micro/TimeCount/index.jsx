import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { COLOR } from '../../../theme/webColor';
import { Text14, Text16 } from '../../../styles/mixin/TextCustom';
import { BORDER_RADIUS, POSITION } from '../../../theme/webFoundation';

function TimeCount({ hour = 0, minuts = 0, second = 0 }) {
    const [time, setTime] = useState(
        {
            hour: hour,
            minuts: minuts,
            second: second
        }
    )
    const [count, setCount] = useState(60)
    useEffect(() => {
        setTimeout(() => {
            setCount(() => count - 1)
            if (count <= 0 && time.minuts > 0) {
                setTime({ ...time, minuts: time.minuts - 1 })
                setCount(60)
            } else if (count <= 0 && time.minuts < 0) {
                setTime({ ...time, minuts: 60, hour: time.hour - 1 })
                setCount(60)
            }
            if (count <= 0 && time.minuts <= 0 && time.hour <= 0) {
                setTime({ hour: 0, minuts: 0, second: 0 })
                setCount(60)
            }

        }, 1000)
    }, [count])
    return (
        <Flex gap='8px'
            placeContent='center'
            placeItems='center'
            color={COLOR.red[200]}
        >
            <BoxTime time={time.hour} />
            <Text14 title={':'} fontWeight='bold' />
            <BoxTime time={time.minuts} />
            <Text14 title={':'} fontWeight='bold' />
            <BoxTime time={count} />
        </Flex>
    );
}

const BoxTime = ({ time }) => {
    return (
        <Box
            padding='3px'
            backgroundColor={COLOR.red[200]}
            borderRadius={BORDER_RADIUS.radius5}
            color={COLOR.white}
        >
            <Text14 title={time < 10 ? `0${time}` : time} fontWeight='bold' />
        </Box >
    )
}
export default TimeCount;