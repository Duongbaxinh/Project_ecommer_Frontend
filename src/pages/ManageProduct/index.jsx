import { ArrowRightIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Checkbox, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BoxRadius from '../../components/micro/BoxRadius/BoxRadius';
import Chip from '../../components/micro/Chip';
import Price from '../../components/micro/Price';
import { productList } from '../../datas/listProduct';
import SHOPICON from '../../public/icons/shop.png';
import { Text12, Text16 } from '../../styles/mixin/TextCustom';

function ManageProduct(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    // Hàm lấy tất cả các sản phẩm
    const loadProducts = async () => {
        try {
            setIsLoading(true)

            setProducts(productList);
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching products:", error);
            setIsLoading(false)
        }
    };

    useEffect(() => {
        loadProducts(); // Gọi hàm loadProducts khi component được render
    }, []);


    if (isLoading) return <h1>Loading ....</h1>
    return (
        <Box>
            <Text16 title={'Product'.toLocaleUpperCase()} />
            <Flex flexDir='column' gap='15px' >
                <BoxRadius flex='1' padding='4px 8px' borderRadius='8px' >
                    <Grid
                        gap='25px'
                        alignItems='start' w='100%'
                        justifySelf='flex-start'
                        templateColumns='1fr 1fr 1fr 1fr 1fr 1fr'>
                        <GridItem>
                            <Text12 title={'Product Name'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Product Branch'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Product Description'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Product Price'} />
                        </GridItem>
                        <GridItem>
                            <Text12 title={'Active'} />
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
                    {/* ------------------------ start show list product ------------------------------ */}
                    {products.map((product) => (
                        <Grid alignItems='start'
                            justifyContent={'start'}
                            w='100%' mt='30px' gap='25px'
                            templateColumns='1fr 1fr 1fr 1fr 1fr 1fr'
                        >
                            <GridItem alignItems='center' >
                                <Checkbox defaultChecked>
                                    <Flex align='center' gap='10px'>
                                        <Text12 title={product.productName} />
                                    </Flex>
                                </Checkbox>
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Text12 title={product.productBrand} fontWeight='700' />
                            </GridItem>

                            <GridItem justifyContent='center'>
                                <Text12 title={product?.productMade} color='red' />
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Price product_price={product.productPrice} />

                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Text12 title={product.isActive ? "Active" : "DeActive"} color='red' />
                            </GridItem>
                            <GridItem justifyContent='center'>
                                <Flex gap={5}>
                                    <ViewIcon cursor={'pointer'} onClick={() => { }} />
                                    <ViewOffIcon cursor={'pointer'} onClick={() => { }} />
                                </Flex>
                            </GridItem>
                        </Grid>
                    ))}
                    {/* ------------------------ end show list product --------------------------------- */}
                </BoxRadius>
            </Flex>
        </Box >
    );
}

export default ManageProduct;