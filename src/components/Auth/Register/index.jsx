import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Text
} from '@chakra-ui/react';
import React from 'react';
import { Text10, Text16 } from '../../../styles/mixin/TextCustom';
import { COLOR } from '../../../theme/webColor';
import { BORDER_RADIUS, PADDING } from '../../../theme/webFoundation';
import BoxRadius from '../../micro/BoxRadius/BoxRadius';
import IconButtonCustom from '../../micro/IconButtonCustom';

function Register({ onLogin }) {
    return (
        <BoxRadius padding={PADDING.all8}>
            <Flex>
                <Flex flex='1' flexDir='column' gap='15px'>
                    <Text16 title={'Register'} fontWeight='700' />
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>password</FormLabel>
                        <Input type='password' />
                    </FormControl>
                    <IconButtonCustom backgroundColor={COLOR.red[200]} borderRadius={BORDER_RADIUS.radius8} >
                        <Text16 title={'Register'} />
                    </IconButtonCustom>

                    <Flex align='center' gap='10px'>
                        <Text10 title={"Have Account "} />
                        <Text onClick={onLogin} cursor='pointer' color={COLOR.blue[200]}>Login</Text>
                    </Flex>
                </Flex>
            </Flex>
        </BoxRadius>
    );
}

export default Register;