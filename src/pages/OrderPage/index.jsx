import { ArrowRightIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Checkbox, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BoxRadius from '../../components/micro/BoxRadius/BoxRadius';
import Chip from '../../components/micro/Chip';
import Price from '../../components/micro/Price';
import SHOPICON from '../../public/icons/shop.png';
import { getAllOrder, handleDeleteOrder } from '../../service/product.service';
import { Text12, Text16 } from '../../styles/mixin/TextCustom';

function OrderPage(props) {
    const [load, setLoad] = useState(false)
    const { data, isLoading, isError } = useQuery({ queryKey: ['orders', load], queryFn: () => getAllOrder() })
    const { mutate } = useMutation({
        mutationFn: (idOrder) => {
            return handleDeleteOrder(idOrder)
        },
        onSuccess: () => {
            setLoad(!load)
        }
    })
    const handleDeteleOrder = (idOrder) => {
        mutate(idOrder)
    }
    if (isLoading) return <h1>Loading ....</h1>
    const orders = data.data;
    return (
        <Box>
            <Text16 title={'Giỏ Hàng'.toLocaleUpperCase()} />
            <Flex flexDir='column' gap='15px' >
                <BoxRadius flex='1' padding='4px 8px' borderRadius='8px' >
                    <Grid
                        gap='25px'
                        alignItems='start' w='100%'
                        justifySelf='flex-start'
                        templateColumns='1fr 1fr 1fr 1fr 1fr 1fr'>
                        <GridItem>
                            <Text12 title={'receiver_name'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'receiver_phone'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'receiver_address'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'total'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'description'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Cancel'} />
                        </GridItem>
                    </Grid>
                </BoxRadius>
                <BoxRadius borderRadius='8px'>
                    <Checkbox>
                        <Chip leading={
                            <Image src={SHOPICON} h='24px' />}
                            title='Tiki Trading'
                            trailding={<ArrowRightIcon />} />
                    </Checkbox>
                    {/* ------------------------ start show list order ------------------------------ */}
                    {orders.map((order) => (
                        <Grid alignItems='start'
                            justifyContent={'start'}
                            w='100%' mt='30px' gap='25px'
                            templateColumns='1fr 1fr 1fr 1fr 1fr 1fr'
                        >
                            <GridItem alignItems='center' >
                                <Checkbox defaultChecked>
                                    <Flex align='center' gap='10px'>
                                        <Text12 title={order.receiver_name} />
                                    </Flex>
                                </Checkbox>
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Text12 title={order.receiver_phone} fontWeight='700' />
                            </GridItem>

                            <GridItem justifyContent='center'>
                                <Text12 title={order.receiver_address} color='red' />
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Price product_price={order.total} color='red' />
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Text12 title={order.description} color='red' />
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <DeleteIcon onClick={() => handleDeteleOrder(order.id)} />
                            </GridItem>
                        </Grid>
                    ))}
                    {/* ------------------------ end show list order --------------------------------- */}
                </BoxRadius>
            </Flex>
        </Box >
    );
}

export default OrderPage;