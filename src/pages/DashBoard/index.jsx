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
import { Text10, Text16 } from '../../styles/mixin/TextCustom';
import { COLOR } from '../../theme/webColor';
import { BORDER_RADIUS, PADDING } from '../../theme/webFoundation';
import BoxRadius from './../../components/micro/BoxRadius/BoxRadius';
import IconButtonCustom from './../../components/micro/IconButtonCustom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DashBoard({ onLogin }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()
    const [roles, setRoles] = useState([])
    const [loading, setloading] = useState([])
    const [companies, setCompany] = useState([])

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        console.log('cehkkkk', userInfo)
        if (userInfo != null) {
            const userToken = userInfo
            console.log('check token :::  ', userToken)
            setloading(true)
            const loadRoleAndUser = async () => {
                const roleRes = await axios.get('http://localhost:8080/api/roles', {
                    headers: {
                        Authorization: `Bearer ${userToken.token}`
                    }
                })
                const companyRes = await axios.get('http://localhost:8080/api/company', {
                    headers: {
                        Authorization: `Bearer ${userToken.token}`
                    }
                })
                console.log('check ', roleRes)
                setCompany(companyRes.data)
                setRoles(roleRes.data)
                setloading(false)
            }
            loadRoleAndUser()
        } else {
            navigate('/')
        }

    }, [])
    if (loading) return <h1>Loading .....</h1>
    const handleRegister = async (dataRegister) => {
        try {
            const response = await axios.post('http://localhost:8080/api/register', {
                ...dataRegister
            })
            if (response.status === 200) {
                alert('create user successfully!')
                navigate('/manageuser')
                // window.location.reload()
            } else {
                alert('create user failure!')
            }
        } catch (error) {
            console.log('check error', error)
        }
    }

    return (
        <BoxRadius padding={PADDING.all8} maxWidth={"500px"} margin={"0 auto"}>
            <Flex>
                <Flex flex='1' flexDir='column' gap='15px'>
                    <Text16 title={'DashBoard'} fontWeight='700' />

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
                        <FormLabel>Company</FormLabel>
                        <Select {...register('companyId')} placeholder="Select a company">
                            {companies.length > 0 && companies.map((company) => (
                                <option key={company.id} value={company.id}>
                                    {company.companyName}
                                </option>
                            ))}
                        </Select>
                        <FormLabel>Role</FormLabel>
                        {roles.length > 0 && roles.map((role) => (
                            <Checkbox {...register('roles')} value={role.id}>
                                {role.roleName}
                            </Checkbox>
                        ))}


                    </FormControl>

                    <IconButtonCustom
                        onFc={handleSubmit((data) => handleRegister(data))}
                        backgroundColor={COLOR.red[200]} borderRadius={BORDER_RADIUS.radius8} >
                        <Text16 title={'Create User'} />
                    </IconButtonCustom>


                </Flex>
            </Flex>
        </BoxRadius>
    );
}

export default DashBoard;