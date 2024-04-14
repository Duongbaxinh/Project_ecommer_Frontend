import { AddIcon, ArrowRightIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Checkbox, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import BoxRadius from '../../../components/micro/BoxRadius/BoxRadius';
import Chip from '../../../components/micro/Chip';
import IconButtonCustom from '../../../components/micro/IconButtonCustom';
import Price from '../../../components/micro/Price';
import TagGenuine from '../../../components/micro/TagGenuine';
import DELIVERY_ICON from '../../../public/icons/delivery.png';
import SHOPICON from '../../../public/icons/shop.png';
import { Text12, Text16 } from '../../../styles/mixin/TextCustom';
import { BORDER_RADIUS } from '../../../theme/webFoundation';
import { useMutation } from '@tanstack/react-query';
import { checkout } from '../../../service/product.service';
function ListProduct({ carts, onDeleteCart, load, setLoad }) {
    const { mutate } = useMutation(
        {
            mutationFn: ({ id_cart, type }) => checkout({ id_cart, type }),
            onSuccess: () => setLoad(!load)
        }
    )
    const onUp = (id) => {
        setTimeout(() => {
            mutate({ id_cart: id, type: 'up' }, 500)
        })

    }
    const onDown = (id) => {
        mutate({ id_cart: id, type: 'down' })

    }

    return (
        <Box>
            <Text16 title={'Giỏ Hàng'.toLocaleUpperCase()} />
            <Flex flexDir='column' gap='15px' >
                <BoxRadius flex='1' padding='4px 8px' borderRadius='8px' >
                    <Grid
                        gap='25px'
                        alignItems='center' w='100%'
                        templateColumns='40% 15% 15% 10% 5%'>
                        <GridItem>
                            <Checkbox defaultChecked> <Text12 title={`Tất cả (${carts.length} sản phẩm)`} /></Checkbox>
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Đơn giá'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Số lượng'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Thành tiền'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Delete'} />
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
                    {/* ------------------------ start show list cart ------------------------------ */}
                    {carts.map((cart) => (
                        <Grid alignItems='center'
                            w='100%' mt='30px' gap='25px'
                            templateColumns='40% 15% 15% 10% 5%'
                        >
                            <GridItem alignItems='center' >
                                <Checkbox defaultChecked>
                                    <Flex align='center' gap='10px'>
                                        <Image w='80px' h='80px' src={cart.product_id.product_thumbnail} />
                                        <Flex flexDir='column' justify='flex-start' gap='5px' >
                                            {cart.product_id.product_genuine && <TagGenuine />}
                                            <Text12 title={cart.product_id.product_name} />
                                            <Chip leading={<Image h='24px' src={DELIVERY_ICON} title={`Giao thứ ${7}, ${'06/04'} `} />} />
                                        </Flex>
                                    </Flex>
                                </Checkbox>
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Price product_price={cart.product_id.product_price} fontWeight='700' />
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Flex gap='10px'>
                                    <IconButtonCustom borderColor='grey' borderRadius={BORDER_RADIUS.radius8} onFc={() => onDown(cart.id)}>
                                        <MinusIcon color='grey' />
                                    </IconButtonCustom>
                                    <IconButtonCustom borderColor='grey' borderRadius={BORDER_RADIUS.radius8}>
                                        <Text16 title={`${cart.quantity_count}`} color='grey' />
                                    </IconButtonCustom>
                                    <IconButtonCustom borderColor='grey' borderRadius={BORDER_RADIUS.radius8} onFc={() => onUp(cart.id)}  >
                                        <AddIcon color='grey' />
                                    </IconButtonCustom>
                                </Flex>
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Price product_price={cart.product_id.product_price * cart.quantity_count} color='red' />
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <DeleteIcon onClick={() => onDeleteCart(cart.id)} />
                            </GridItem>
                        </Grid>
                    ))}
                    {/* ------------------------ end show list cart --------------------------------- */}
                </BoxRadius>
            </Flex>
        </Box >
    );
}

export default ListProduct;