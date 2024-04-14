import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Text
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Text10, Text16 } from '../../../styles/mixin/TextCustom';
import { COLOR } from '../../../theme/webColor';
import { BORDER_RADIUS, PADDING } from '../../../theme/webFoundation';
import BoxRadius from '../../micro/BoxRadius/BoxRadius';
import IconButtonCustom from '../../micro/IconButtonCustom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { handleLoginService, handleProfileService } from '../../../service/product.service';
import axios from 'axios';

function Login({ onRegister }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate } = useMutation({
        mutationFn: (data) => handleLoginService(data),
        onSuccess: async (res) => {
            const { access } = res
            const dataUser = await handleProfileService(access)
            console.log('check data profile :::: ', dataUser)
            localStorage.setItem('accessToken', JSON.stringify(access))
            localStorage.setItem('user', JSON.stringify(dataUser.data))
        },
    })

    const handleLogin = (data) => {
        mutate(data)
    }

    return (
        <BoxRadius padding={PADDING.all8}>
            <Flex>
                <Flex flex='1' flexDir='column' gap='15px'>
                    <Text16 title={'Login'} fontWeight='700' />

                    <FormControl >
                        <FormLabel>Username</FormLabel>
                        <Input {...register('username')} type='text' />
                        <FormLabel>password</FormLabel>
                        <Input {...register('password')} type='password' />
                    </FormControl>

                    <IconButtonCustom
                        onFc={handleSubmit((data) => handleLogin(data))}
                        backgroundColor={COLOR.red[200]} borderRadius={BORDER_RADIUS.radius8} >
                        <Text16 title={'Login'} />
                    </IconButtonCustom>

                    <Flex align='center' gap='10px'>
                        <Text10 title={"Haven't Account "} />
                        <Text onClick={onRegister} cursor='pointer' color={COLOR.blue[200]}>Register</Text>
                    </Flex>
                </Flex>
            </Flex>
        </BoxRadius>
    );
}

export default Login;