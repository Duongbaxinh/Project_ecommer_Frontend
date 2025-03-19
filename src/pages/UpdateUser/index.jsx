import {
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import BoxRadius from '../../components/micro/BoxRadius/BoxRadius';
import IconButtonCustom from '../../components/micro/IconButtonCustom';
import { Text16 } from '../../styles/mixin/TextCustom';
import { COLOR } from '../../theme/webColor';
import { BORDER_RADIUS, PADDING } from '../../theme/webFoundation';

function UpdateUser({ user }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [userValue, setUserValue] = useState({
        "username": '',
        "email": '',
        'firstName': "",
        "lastName": '',
        "company": {},
        "roles": []
    })
    const [listCompany, setListCompany] = useState([])

    useEffect(() => {

        const loadData = async () => {
            try {
                console.log('check user ', user)
                const { data } = await axios.get(`http://localhost:8080/api/user/${id}`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }

                })
                const companyRes = await axios.get('http://localhost:8080/api/company', {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                })
                setListCompany(companyRes.data)
                console.log('check l', companyRes)
                setUserValue({ ...data, company: data.company, roles: data.roles.map((role) => role.id.toString()) })
                setIsLoading(false)
            } catch (error) {
                console.log('errpr', error)
                setIsLoading(false)
            }
        }

        loadData()

    }, [user.token, id, user])
    const handleUpdate = async (dataUpdate) => {
        console.log('check data update', dataUpdate)
        try {
            const response = await axios.put(
                `http://localhost:8080/api/user/${id}`,
                { ...dataUpdate },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                }

            )
            if (response.status === 200) {
                alert('update user successfully!')
                navigate('/manageuser')
            } else {
                alert('update user failure!')
            }
        } catch (error) {
            console.log('check error', error)
        }
    }
    const handleOnChangeValue = ({ type, value }) => {
        const userClone = { ...userValue };

        if (type === 'roles') {

            if (userClone.roles.includes(value)) {
                userClone.roles = userClone.roles.filter((role) => role !== value);
            } else {
                userClone.roles.push(value);
            }
        } else {
            userClone[type] = value;
        }

        setUserValue({ ...userClone });
    }
    console.log('check', userValue)
    if (isLoading) return <h1>Loading...</h1>
    return (
        <BoxRadius padding={PADDING.all8}>
            <Flex>
                <Flex flex='1' flexDir='column' gap='15px'>
                    <Text16 title={'UpdateUser'} fontWeight='700' />

                    <FormControl >
                        <FormLabel>Username</FormLabel>
                        <Input {...register('username')} type='text' onChange={(e) => { handleOnChangeValue({ type: 'username', value: e.target.value }) }} value={userValue.username} />
                        <FormLabel>Email</FormLabel>
                        <Input {...register('email')} type='text' onChange={(e) => { handleOnChangeValue({ type: 'email', value: e.target.value }) }} value={userValue.email} />
                        <FormLabel>FirstName</FormLabel>
                        <Input {...register('firstName')} type='text' onChange={(e) => { handleOnChangeValue({ type: 'firstName', value: e.target.value }) }} value={userValue.firstName} />
                        <FormLabel>LastName</FormLabel>
                        <Input {...register('lastName')} type='text' onChange={(e) => { handleOnChangeValue({ type: 'lastName', value: e.target.value }) }} value={userValue.lastName} />
                        <FormLabel>Companies </FormLabel>
                        <Select {...register('companyId')} placeholder={`${userValue.company ? userValue.company.companyName : 'Select company'}`} >
                            {listCompany.length > 0 && listCompany.map((company) => (
                                <option key={company.id} value={company.id}>
                                    {company.companyName}
                                </option>
                            ))}
                        </Select>
                        <FormLabel>Role</FormLabel>
                        <Checkbox {...register('roles')}
                            onChange={(e) => {
                                handleOnChangeValue({
                                    type: 'roles',
                                    value: '1',
                                });
                            }}
                            isChecked={userValue.roles.includes('1')}
                            value={userValue.roles[0]}
                        >
                            Admin
                        </Checkbox>
                        <Checkbox {...register('roles')} onChange={(e) => {
                            handleOnChangeValue({
                                type: 'roles',
                                value: '2',
                            });
                        }}
                            isChecked={userValue.roles.includes('2')}
                            value={userValue.roles[1]}>
                            User
                        </Checkbox>
                    </FormControl>

                    <IconButtonCustom
                        onFc={handleSubmit((data) => handleUpdate(data))}
                        backgroundColor={COLOR.red[200]} borderRadius={BORDER_RADIUS.radius8} >
                        <Text16 title={'UpdateUser'} />
                    </IconButtonCustom>


                </Flex>
            </Flex>
        </BoxRadius>
    );
}

export default UpdateUser;