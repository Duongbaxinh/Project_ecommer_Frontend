import { Container, Flex, Image, Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperSlide } from 'swiper/react';
import BoxRadius from '../../components/micro/BoxRadius/BoxRadius';
import CardProduct from '../../components/middle/CardPoduct';
import CardProductFull from '../../components/middle/CardProductFull';
import Category from '../../components/middle/Category';
import ContainerCarousel from '../../components/sclup/ContainerCarousel';
import ListTemplate from '../../components/sclup/ListTemplate';
import { categoryData, productsTemplate, slideData } from '../../datas';
import { TEMPLATEBUTTONTITLES } from '../../libs/constants';

import { productList } from '../../datas/listProduct';
import { BORDER_RADIUS, GAP_SPACE, PADDING } from '../../theme/webFoundation';
import axios from 'axios';
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

    // const { data, isLoading, isError } = useQuery({ queryKey: 'products', queryFn: () => fetchAllProduct() })
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
    console.log("check list product :::: ", products)
    return (
        <Container w={`${1280 - 350}px`} margin={0} display='flex' flexDirection='column' gap={GAP_SPACE.gap8}>
            {/* CAROUSEL */}
            <BoxRadius
                position='relative'
                w={`${1280 - 350}px`}
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
            <BoxRadius padding={PADDING.all16} w={`${1280 - 350}px`}>
                <Flex justify='space-evenly'>
                    {categoryData.map(({ id, title, url_img }) => (
                        <Category key={id} title={title} img_url={url_img} />
                    ))}
                </Flex>
            </BoxRadius>
            {/* BEST PRICE */}
            <BoxRadius w={`${1280 - 350}px`}>
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
            <BoxRadius w={`${1280 - 350}px`}>
                <ListTemplate leading={TITLE[1].leading}
                    listButton={TEMPLATEBUTTONTITLES.CHINHHANG}
                >
                    <ContainerCarousel slidesPerView={6} spaceBetween='10px'>
                        {products.map(({ product_id, product_name, product_thumbnail, product_genuine, product_price }) => (
                            <SwiperSlide key={product_id} >
                                <Link href={`/detail/${product_id}`}>
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