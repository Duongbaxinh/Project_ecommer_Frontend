import { AddIcon, ArrowRightIcon, DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Box, Checkbox, Flex, Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BoxRadius from '../../components/micro/BoxRadius/BoxRadius';
import Chip from '../../components/micro/Chip';
import { Text12, Text16 } from '../../styles/mixin/TextCustom';
import { Link } from 'react-router-dom';
function ManageUser({ user }) {
    const [isLoading, setIsLoading] = useState(true)
    const [isLoad, setIsLoad] = useState(true)
    const [users, setUser] = useState([])
    const loadUser = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.get('http://localhost:8080/api/users', {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            setUser(data);
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching users:", error);
            setIsLoading(false)
        }
    };

    useEffect(() => {
        loadUser(); // Gọi hàm loadProducts khi component được render
    }, [user.token, isLoad]);

    const handleDeleteUser = async (id) => {
        try {

            const { data } = axios.delete(`http://localhost:8080/api/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            setIsLoad(() => !isLoad)
            console.log('data delete', data)

        } catch (error) {
            console.log(error)
        }
    }
    if (isLoading) return <h1>Loading ....</h1>
    return (
        <Box>
            <Text16 title={'User'.toLocaleUpperCase()} />
            <Flex flexDir='column' gap='15px' >
                <BoxRadius flex='1' padding='4px 8px' borderRadius='8px' >
                    <Grid
                        gap='25px'
                        alignItems='start' w='100%'
                        justifySelf='flex-start'
                        templateColumns='1fr 1fr 1fr 1fr 1fr 1fr'>
                        <GridItem>
                            <Text12 title={'ID'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'First Name'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Last Name'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Email'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Role'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Action'} />
                        </GridItem>
                    </Grid>
                </BoxRadius>
                <BoxRadius borderRadius='8px'>
                    <Link to={'/dashboard'}>
                        <Box cursor={'pointer'} backgroundColor={'green'} w={'100px'} padding={"5px"} borderRadius={"7px"} color={'white'}>
                            <Chip leading={
                                <AddIcon />}
                                title='New User'
                                trailding={<ArrowRightIcon />} />
                        </Box></Link>
                    {/* ------------------------ start show list user ------------------------------ */}
                    {users.map((user) => (

                        <Grid alignItems='start'
                            justifyContent={'start'}
                            w='100%' mt='30px' gap='25px'
                            templateColumns='1fr 1fr 1fr 1fr 1fr 1fr'
                        >
                            <GridItem alignItems='center' >
                                <Checkbox defaultChecked>
                                    <Flex align='center' gap='10px'>
                                        <Text12 title={user.id} />
                                    </Flex>
                                </Checkbox>
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Text12 title={user.firstName} fontWeight='700' />
                            </GridItem>

                            <GridItem justifyContent='center'>
                                <Text12 title={user?.lastName} color='red' />
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Text12 title={user.email} />

                            </GridItem>
                            <GridItem justifyContent='center'>
                                {user?.roles.map((role) => (
                                    <Text12 title={role.roleName} />
                                ))}
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Flex gap={5} alignItems={'center'}>
                                    <DeleteIcon color={'red'} cursor={'pointer'} onClick={() => handleDeleteUser(user.id)} />
                                    <Link to={`/userDetail/${user.id}`}>  <ViewIcon cursor={'pointer'} /></Link>
                                    <Link to={`/updateUser/${user.id}`}>
                                        <EditIcon color={'green'} cursor={'pointer'} /></Link>
                                </Flex>
                            </GridItem>
                        </Grid>

                    ))}
                    {/* ------------------------ end show list user --------------------------------- */}
                </BoxRadius>
            </Flex>
        </Box >
    );
}

export default ManageUser;