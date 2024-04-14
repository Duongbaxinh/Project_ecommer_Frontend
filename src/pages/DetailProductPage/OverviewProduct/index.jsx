import { Divider, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import BoxRadius from '../../../components/micro/BoxRadius/BoxRadius';
import ListSpecial from '../../../components/middle/ListSpecial';
import { Text14 } from '../../../styles/mixin/TextCustom';
import { COLOR } from '../../../theme/webColor';
import { BORDER_WIDTH, PADDING, POSITION } from '../../../theme/webFoundation';


function OverviewProduct({ product, bg, onShowBackground, changePosition }) {
    if (!product) return <h1>Loading...</h1>

    return (
        <BoxRadius padding='0' maxW='350px' position={changePosition ? 'fixed' : "absolute"} left='60px' top={changePosition ? '10px' : ''}>
            <BoxRadius padding={PADDING.all16}>
                <Flex {...POSITION.flexColumn()} gap='5px'>
                    <BoxRadius padding='5px'
                        border={`0.5px solid ${COLOR.grey[200]}`}
                        aspectRatio='368/368'>
                        <Image src={bg ? bg : product.product_thumbnail} alt=""
                            w='368px'
                            h='368px' />
                    </BoxRadius>
                    <Flex justifyContent='flex-start' gap='5px'>
                        {product.images.map((image) => (
                            <BoxRadius padding={PADDING.all8}
                                maxW='43px'
                                borderWidth={`${bg === image.image_url ? BORDER_WIDTH.bw2 : BORDER_WIDTH.bw1}`}
                                borderColor={`${bg === image.image_url ? COLOR.blue[200] : COLOR.grey[200]}`}
                                onMouseOver={() => onShowBackground(image.image_url)}
                                onClick={() => onShowBackground(image.image_url)}
                            >
                                <Image src={image.image_url} />
                            </BoxRadius>

                        ))}
                    </Flex>
                    <Text14 title={'Đặc điểm nổi bật'} fontWeight='bold' />
                    {/* {product.product_special.map((item, index) => (
                        <ListSpecial title={item} />
                    ))} */}
                </Flex>
            </BoxRadius>
            <Divider color={COLOR.grey[200]} size='md' />
            <Text14 padding=' 10px 16px 16px 16px' title={'Xem thêm ưu điểm và lưu ý của sản phẩm'} />
        </BoxRadius>
    );
}

export default OverviewProduct;