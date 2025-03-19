import React from 'react';
import { SwiperSlide } from 'swiper/react';
import BoxRadius from '../../../micro/BoxRadius/BoxRadius';
import { Image } from '@chakra-ui/react';

function CardSlider({ url_image }) {
    return (
        <SwiperSlide style={{
            maxHeight: '460px',
            minHeight: '460px',

        }}>
            <BoxRadius aspectRatio={700 / 500}>
                <Image src={url_image}
                    w='100%'
                    h='100%' />
            </BoxRadius>
        </SwiperSlide >
    );
}

export default CardSlider;