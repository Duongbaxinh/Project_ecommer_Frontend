import { Divider, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import BoxRadius from '../../../components/micro/BoxRadius/BoxRadius';
import { Text14 } from '../../../styles/mixin/TextCustom';
import { COLOR } from '../../../theme/webColor';
import { BORDER_WIDTH, PADDING, POSITION } from '../../../theme/webFoundation';


function OverviewProduct({ product, bg, onShowBackground, detailHeight, height, width }) {
    if (!product) return <h1>Loading...</h1>
    const scroll = height > 90 && height < detailHeight - 350 && width >= 1280;
    return (
        <BoxRadius
            padding='0'
            maxW='350px'
            height='fit-content'


        >
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
                        {product.product_images.map((image) => (
                            <BoxRadius padding={PADDING.all8}
                                cursor='pointer'
                                maxW='43px'
                                borderWidth={`${bg === image ? BORDER_WIDTH.bw2 : BORDER_WIDTH.bw1}`}
                                borderColor={`${bg === image ? COLOR.blue[200] : COLOR.grey[200]}`}
                                onMouseOver={() => onShowBackground(image)}
                                onClick={() => onShowBackground(image)}
                            >
                                <Image src={image} />
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