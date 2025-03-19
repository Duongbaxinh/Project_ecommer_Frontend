import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Text
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { handleLoginService, handleProfileService } from '../../../service/product.service';
import { Text10, Text14, Text16 } from '../../../styles/mixin/TextCustom';
import { COLOR } from '../../../theme/webColor';
import { BORDER_RADIUS, PADDING } from '../../../theme/webFoundation';
import BoxRadius from '../../micro/BoxRadius/BoxRadius';
import IconButtonCustom from '../../micro/IconButtonCustom';
import axios from 'axios';

function Login({ onRegister, onClose }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const handleLogin = async (dataLogin) => {
        try {
            const { data } = await axios.post('http://localhost:8080/api/generateToken', {
                username: dataLogin.username,
                password: dataLogin.password
            })
            localStorage.setItem("Logined", true)
            localStorage.setItem("userInfo", JSON.stringify(data))
            window.location.reload()
        } catch (error) {
            console.log('check error', error)
        }

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
                        <Text14 title={"Haven't Account "} />
                        <Text onClick={onRegister} cursor='pointer' color={COLOR.blue[200]}>Register</Text>
                    </Flex>
                </Flex>
            </Flex>
        </BoxRadius>
    );
}

export default Login;