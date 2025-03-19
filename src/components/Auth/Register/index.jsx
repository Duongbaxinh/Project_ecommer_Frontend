import {
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Text10, Text14, Text16 } from '../../../styles/mixin/TextCustom';
import { COLOR } from '../../../theme/webColor';
import { BORDER_RADIUS, PADDING } from '../../../theme/webFoundation';
import BoxRadius from '../../micro/BoxRadius/BoxRadius';
import IconButtonCustom from '../../micro/IconButtonCustom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Register({ onLogin, onClose }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const handleRegister = async (dataRegister) => {
        try {
            const response = await axios.post('http://localhost:8080/api/register', {
                ...dataRegister
            })
            if (response.status === 200) {
                alert('register successfully!')
                onLogin()
            } else {
                alert("Some thing went wrong")
            }

        } catch (error) {
            console.log('check error', error)
        }
    }

    return (
        <BoxRadius padding={PADDING.all8}>
            <Flex>
                <Flex flex='1' flexDir='column' gap='15px'>
                    <Text16 title={'Register'} fontWeight='700' />

                    <FormControl >
                        <FormLabel>Username</FormLabel>
                        <Input {...register('username')} type='text' />
                        <FormLabel>Email</FormLabel>
                        <Input {...register('email')} type='text' />
                        <FormLabel>password</FormLabel>
                        <Input {...register('password')} type='password' />
                        <FormLabel>FirstName</FormLabel>
                        <Input {...register('firstName')} type='text' />
                        <FormLabel>LastName</FormLabel>
                        <Input {...register('lastName')} type='text' />

                    </FormControl>

                    <IconButtonCustom
                        onFc={handleSubmit((data) => handleRegister(data))}
                        backgroundColor={COLOR.red[200]} borderRadius={BORDER_RADIUS.radius8} outline={'none'} border={'0px'} >
                        <Text16 title={'Register'} />
                    </IconButtonCustom>

                    <Flex align='center' gap='10px'>
                        <Text14 title={"Have Account "} />
                        <Text onClick={() => onLogin()} cursor='pointer' color={COLOR.blue[200]}>Login</Text>
                    </Flex>
                </Flex>
            </Flex>
        </BoxRadius>
    );
}

export default Register;