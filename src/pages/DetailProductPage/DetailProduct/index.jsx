import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import BoxRadius from '../../../components/micro/BoxRadius/BoxRadius';
import Price from '../../../components/micro/Price';
import Delivery from '../../../public/icons/delivery.png'
import TagGenuine from '../../../components/micro/TagGenuine';
import { Text11, Text12, Text14, Text16 } from '../../../styles/mixin/TextCustom';
import { COLOR } from '../../../theme/webColor';
import { POSITION } from '../../../theme/webFoundation';
import { Link } from 'react-router-dom';
import ContainerCarousel from '../../../components/sclup/ContainerCarousel';
import { products } from '../../../datas/listProduct';
import { SwiperSlide } from 'swiper/react';
import CardProductFull from '../../../components/middle/CardProductFull';

function DetailProduct({ product }) {
    return (
        <Flex {...POSITION.flexColumn()} gap='10px' maxW={'424px'} margin="0 auto">
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
                        <Text11 title={`rate ::: ${product.product_rate}`} />
                        <Text11 title={`Đã bán ::: ${500}`} />
                    </Flex>
                    <Price product_price={product.product_price} />
                </Flex>
            </BoxRadius >

            <BoxRadius padding='16px'>
                <Flex flexDir='column' gap='10px' >
                    <Text16 title={'Thông tin vận chuyển'} fontWeight='500' />
                    <Flex justifyContent='space-between'>
                        <Text12 title={`Giao đến ${'H.Gio Linh, Xã Gio Mỹ, Quảng Trị'}`} />
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
                            {product.same_product.map(({ product_id, product_name, product_thumbnail, product_genuine, product_price }) => (
                                <SwiperSlide key={product_id} >
                                    <CardProductFull product_genuine={product_genuine}
                                        product_name={product_name}
                                        product_thumbnail={product_thumbnail}
                                        product_price={product_price}
                                    />
                                </SwiperSlide>
                            ))}
                        </ContainerCarousel>
                    </Box>

                </Flex>
            </BoxRadius>
        </Flex>
    );
}

export default DetailProduct;