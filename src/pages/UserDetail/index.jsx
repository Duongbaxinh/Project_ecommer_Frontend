import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BoxRadius from '../../components/micro/BoxRadius/BoxRadius';
import { Text10, Text16 } from '../../styles/mixin/TextCustom';
import { Box, Grid, GridItem } from '@chakra-ui/react';

function UserDetail({ user }) {

    // get height of component Detail 
    const [isLoading, setIsLoading] = useState(true)
    const [userDetail, setUserDetail] = useState({})
    const { id } = useParams()

    const loadUser = async () => {
        try {
            console.log('check use tt ', user.token)
            const { data } = await axios.get(`http://localhost:8080/api/user/${id}`, {

                headers: {
                    Authorization: `Bearer ${user.token}`
                }

            })
            console.log('check l', data)
            setUserDetail(data)
        } catch (error) {

        }
    }
    useEffect(() => {
        setIsLoading(true)
        loadUser()
        setIsLoading(false)
    }, [id, user.token])
    if (isLoading) return <h1>Loading...</h1>
    return (
        <BoxRadius margin='0 auto' w='600px'>
            <Grid templateColumns="1fr 1fr" gap={4}>
                <GridItem bg="gray.100" p={2}>
                    <Text16 title={'Field'} minWidth="30px" fontWeight="bold" />
                </GridItem>
                <GridItem bg="gray.100" p={2}>
                    <Text16 title={"Value"} fontWeight="bold" />
                </GridItem>
                {/* First Name */}
                <GridItem bg="white" p={2}>
                    <Text16 title={'First Name'} minWidth="30px" />
                </GridItem>
                <GridItem bg="white" p={2}>
                    <Text16 title={userDetail.firstName} />
                </GridItem>

                {/* Last Name */}
                <GridItem bg="gray.50" p={2}>
                    <Text16 title={'Last Name'} minWidth="30px" />
                </GridItem>
                <GridItem bg="gray.50" p={2}>
                    <Text16 title={userDetail.lastName} />
                </GridItem>

                {/* Full Name */}
                <GridItem bg="white" p={2}>
                    <Text16 title={'Full Name'} minWidth="30px" />
                </GridItem>
                <GridItem bg="white" p={2}>
                    <Text16 title={`${userDetail.lastName} ${userDetail.firstName}`} />
                </GridItem>

                {/* Email */}
                <GridItem bg="gray.50" p={2}>
                    <Text16 title={'Email'} minWidth="30px" />
                </GridItem>
                <GridItem bg="gray.50" p={2}>
                    <Text16 title={userDetail.email} />
                </GridItem>

                {/* Company */}
                <GridItem bg="white" p={2}>
                    <Text16 title={'Company'} minWidth="30px" />
                </GridItem>
                <GridItem bg="white" p={2}>
                    <Text16 title={userDetail?.company?.companyName ?? "User doesn't have company"} />
                </GridItem>

                {/* Role */}
                <GridItem bg="gray.50" p={2}>
                    <Text16 title={'Role'} minWidth="30px" />
                </GridItem>
                <GridItem bg="gray.50" p={2}>
                    {userDetail?.roles?.map((role, index) => (
                        <Text16 key={index} title={role.roleName} />
                    ))}
                </GridItem>
            </Grid>
        </BoxRadius>
    );
}

export default UserDetail;