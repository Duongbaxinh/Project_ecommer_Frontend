import { Box, Divider, Flex, Grid, HStack, Image } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import BoxRadius from '../../../components/micro/BoxRadius/BoxRadius';
import Price from '../../../components/micro/Price';
import TagGenuine from '../../../components/micro/TagGenuine';
import CardProductFull from '../../../components/middle/CardProductFull';
import ContainerCarousel from '../../../components/sclup/ContainerCarousel';
import GroupStart from '../../../components/sclup/GroupStart';
import Delivery from '../../../public/icons/delivery.png';
import { Text11, Text12, Text14, Text16 } from '../../../styles/mixin/TextCustom';
import { COLOR } from '../../../theme/webColor';
import { POSITION } from '../../../theme/webFoundation';

const infoDetail = {
    company: 'Công ty TNHH Truyền Thông Giver',
    launch: new Date().getTime(),
    type: 'Bìa mềm',
    numberOfPage: 288,
    publicer: 'Nhà xuất bản thế giới'
}
function DetailProduct({ product, onGetHeight, rateProduct }) {
    const detailRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    return (

        <Flex ref={detailRef}  {...POSITION.flexColumn()} gap='10px' minW={'424px'} maxW={'424px'} margin="0 auto">
            <BoxRadius padding='16px'>
                <Flex flexDir='column' gap='10px'>
                    <Flex>
                        <HStack spacing='10px'>
                            {product.product_genuine && <TagGenuine />}
                            <Text12 title={`Thương hiệu: ${product.product_brand}`} />
                        </HStack>
                    </Flex>
                    <Text16 title={product.product_name} fontWeight='500' />
                    <Text12 title={`Made in ${product.product_made}`} fontWeight='400' color={COLOR.grey[400]} />
                    <Flex w='100%' justifyContent='space-between' paddingRight='100px'>
                        <Flex placeItems='center' gap='10px'>
                            <Text11 title={`${rateProduct}`} fontWeight='500' />
                            <GroupStart numberOfStart={rateProduct} h='10px' w='10px' />
                        </Flex>
                        <Text11 title={`Đã bán  ${500}`} />
                    </Flex>
                    <Price color={COLOR.red[200]} fontWeight='700' fontSize='25px' product_price={product.product_price} />
                </Flex>
            </BoxRadius >

            <BoxRadius padding='16px'>
                <Flex flexDir='column' gap='10px' >
                    <Text16 title={'Thông tin vận chuyển'} fontWeight='500' />
                    <Flex justifyContent='space-between'>
                        <Text12 title={`Giao đến ${':Hddd. Your H, P.Your P , Da Nang'}`} />
                        <Link hrefLang='#'><Text12 title={'Đổi'} /></Link>
                    </Flex>
                    <Box>
                        <Flex gap='10px'>
                            <Image src={Delivery} h='24px' /> <Text14 title={`Giao thứ ${'sáu'}`} />
                        </Flex>
                        <Text12 title={`Trước ${19}h, ${'05/04 : '} ${product.product_price}`} />
                    </Box>
                </Flex>

            </BoxRadius>

            <BoxRadius padding='16px' w='100%'>
                <Flex flexDir='column' gap='10px'>
                    <Text16 title={'Sản phẩm tương tự'} fontWeight='500' />

                    <Box w='100%' >
                        <ContainerCarousel slidesPerView={3} spaceBetween='10px'>
                            {!isLoading && products.filter(productSample => productSample.product_id !== product.product_id).map(({ product_id, product_name, productThumbnail, product_genuine, product_price }) => (
                                <SwiperSlide key={product_id} >
                                    <Link to={`/detail/${product_id}`}>
                                        <CardProductFull product_genuine={product_genuine}
                                            product_name={product_name}
                                            product_thumbnail={productThumbnail}
                                            product_price={product_price}
                                        /></Link>
                                </SwiperSlide>
                            ))}
                        </ContainerCarousel>
                    </Box>

                </Flex>
            </BoxRadius>

            {/* Thông tin chi tiết của sản phẩm */}
            <BoxRadius padding='16px' w='100%'>
                <Text16 title={'Thông tin chi tiết'} fontWeight='500' />
                {infoDetail && Object.keys(infoDetail).map((key, index) => (
                    <>
                        <Grid
                            padding='8px 0'
                            placeContent='center'

                            width='100%' templateColumns={'repeat(2,1fr)'} key={index}>
                            <span>{key}</span>
                            <span>{infoDetail[key]}</span>
                        </Grid>
                        <Divider /></>
                ))}

            </BoxRadius>
        </Flex>


    );
}

export default DetailProduct;