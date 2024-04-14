import { Link } from '@chakra-ui/react';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import CardProductFull from '../../components/middle/CardProductFull';
import ContainerCarousel from '../../components/sclup/ContainerCarousel';
import ListTemplate from '../../components/sclup/ListTemplate';
import BoxRadius from '../../components/micro/BoxRadius/BoxRadius';
import { TEMPLATEBUTTONTITLES } from '../../libs/constants';

function ShopPage(props) {
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
    return (
        <BoxRadius>
            <ListTemplate leading={TITLE[1].leading}
                listButton={TEMPLATEBUTTONTITLES.CHINHHANG}
            >
                <ContainerCarousel slidesPerView={6} spaceBetween='10px'>
                    {/* {data.data.data.map(({ id, product_name, product_thumbnail, product_genuine, product_price }) => (
                        <SwiperSlide key={id} >
                            <Link href={`/detail/${id}`}>
                                <CardProductFull product_genuine={product_genuine}
                                    product_name={product_name}
                                    product_thumbnail={product_thumbnail}
                                    product_price={product_price}
                                /></Link>
                        </SwiperSlide>
                    ))} */}
                </ContainerCarousel>
            </ListTemplate>
        </BoxRadius>
    );
}

export default ShopPage;