import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { BORDER_RADIUS } from '../../../theme/webFoundation';
import IconButtonCustom from '../../micro/IconButtonCustom';
function ContainerCarousel({ slidesPerView = 2, spaceBetween = '20px', children, ...rest }) {
    return (
        <Box w='inherit' position='relative' >
            <Swiper

                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation={{
                    prevEl: '.btn-prev',
                    nextEl: '.btn-next',
                }}
                style={{
                    borderRadius: BORDER_RADIUS.radius8
                }}
            >
                {children}
                <Flex
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%,-50%)'
                    w='100%'
                    zIndex='99999'
                    justifyContent='space-between'
                >
                    <div className="btn-prev" >
                        <IconButtonCustom>
                            <ChevronLeftIcon />
                        </IconButtonCustom>
                    </div>
                    <div className="btn-next">
                        <IconButtonCustom>
                            <ChevronRightIcon />
                        </IconButtonCustom>
                    </div>
                </Flex>
            </Swiper>
        </Box>

    );
}

export default ContainerCarousel;