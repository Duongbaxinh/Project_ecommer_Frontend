import { Container, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperSlide } from 'swiper/react';
import BoxRadius from '../../components/micro/BoxRadius/BoxRadius';
import CardProduct from '../../components/middle/CardPoduct';
import Category from '../../components/middle/Category';

import { useQuery } from '@tanstack/react-query';
import CardProductFull from '../../components/middle/CardProductFull';
import ContainerCarousel from '../../components/sclup/ContainerCarousel';
import ListTemplate from '../../components/sclup/ListTemplate';
import { categoryData, productsTemplate, slideData } from '../../datas';
import { TEMPLATEBUTTONTITLES } from '../../libs/constants';
import { fetchAllProduct } from '../../service/product.service';
import { BORDER_RADIUS, GAP_SPACE, PADDING } from '../../theme/webFoundation';

const TITLE = [
    {
        leading: 'Giá tốt hôm nay',
        trailing: 'Xem tất cả'
    },
    {
        leading: 'Nhập khẩu chính hãng',
        trailing: ''
    },
]
function HomePage(props) {

    const { data, isLoading, isError } = useQuery({ queryKey: 'products', queryFn: () => fetchAllProduct() })
    if (isLoading) return <h1>Loading ....</h1>
    console.log('data - render ::: ', data.data.data)
    return (
        <Container width='100vw' minW='100%' display='flex' flexDirection='column' gap={GAP_SPACE.gap8}>
            {/* CAROUSEL */}
            <BoxRadius
                position='relative'
                w='100%'
                padding='16px'
                borderRadius={BORDER_RADIUS.radius8}>
                {/* CAROSEL SLIDER */}
                <ContainerCarousel>
                    {slideData.map(({ id, product_thumbnail }) => (
                        <SwiperSlide key={id}                        >
                            <Image src={product_thumbnail} h='280px' borderRadius={BORDER_RADIUS.radius8} />
                        </SwiperSlide>
                    ))}
                </ContainerCarousel>
            </BoxRadius>
            {/* CATEGORY */}
            <BoxRadius padding={PADDING.all16}>
                <Flex justify='space-evenly'>
                    {categoryData.map(({ id, title, url_img }) => (
                        <Category key={id} title={title} img_url={url_img} />
                    ))}
                </Flex>
            </BoxRadius>
            {/* BEST PRICE */}
            <BoxRadius >
                <ListTemplate time={{ hour: 1, minuts: 30 }}
                    leading={TITLE[0].leading}
                    trailing={TITLE[0].trailing}>
                    <ContainerCarousel slidesPerView={6} spaceBetween='15px'>
                        {productsTemplate.map(({
                            product_id,
                            product_price,
                            product_purchase,
                            product_thumbnail }) => (
                            <SwiperSlide key={product_id}>
                                <CardProduct
                                    key={product_id}
                                    product_price={product_price}
                                    product_purchase={product_purchase}
                                    product_thumbnail={product_thumbnail} />
                            </SwiperSlide>
                        ))}
                    </ContainerCarousel>
                </ListTemplate>
            </BoxRadius>
            {/* INCOMING  */}
            <BoxRadius>
                <ListTemplate leading={TITLE[1].leading}
                    listButton={TEMPLATEBUTTONTITLES.CHINHHANG}
                >
                    <ContainerCarousel slidesPerView={6} spaceBetween='10px'>
                        {data.data.data.map(({ id, product_name, product_thumbnail, product_genuine, product_price }) => (
                            <SwiperSlide key={id} >
                                <Link href={`/detail/${id}`}>
                                    <CardProductFull product_genuine={product_genuine}
                                        product_name={product_name}
                                        product_thumbnail={product_thumbnail}
                                        product_price={product_price}
                                    /></Link>
                            </SwiperSlide>
                        ))}
                    </ContainerCarousel>
                </ListTemplate>
            </BoxRadius>
        </Container>
    );
}

export default HomePage;