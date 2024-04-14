import React, { useState } from 'react';
import BoxRadius from '../../../components/micro/BoxRadius/BoxRadius';
import STARICON from '../../../public/icons/star_icon.png';
import TAGOFFICE from '../../../public/icons/tag_office.webp';
import TIKIAVATAR from '../../../public/icons/tiki_avatar.jpg.webp';

import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Avatar, Box, Divider, Flex, Image, Link, useToast } from '@chakra-ui/react';
import IconButtonCustom from '../../../components/micro/IconButtonCustom';
import Price from '../../../components/micro/Price';
import { Text16 } from '../../../styles/mixin/TextCustom';
import { BORDER_RADIUS } from '../../../theme/webFoundation';
import { useMutation } from '@tanstack/react-query';
import { addToCart, checkout } from '../../../service/product.service';
import { useNavigate } from 'react-router-dom';

function Purcharse({ changePosition, product }) {
    const [numberProduct, setNumberProduct] = useState(1)
    const toast = useToast();
    const navigate = useNavigate()
    const checkoutMutation = useMutation(
        {
            mutationFn: ({ id_product, data, type }) => checkout({ id_product, data, type })
        }
    )

    const checkoutMutation2 = useMutation(
        {
            mutationFn: ({ idProduct, quantity_count }) => addToCart({ idProduct, quantity_count }),
            onSuccess: () => {
                toast({
                    title: 'Successfully!',
                    description: 'Add product to Cart successfully',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
            }
        }
    )
    const onUp = () => {
        checkoutMutation.mutate({ id_product: product.id, data: product, type: 'up' })
        setNumberProduct(() => numberProduct + 1)
    }

    const onDown = () => {
        if (numberProduct > 1) {
            checkoutMutation.mutate({ id_product: product.id, data: product, type: 'dpwn' })
            setNumberProduct(() => numberProduct - 1)
        }
    }
    const handleAddToCart = (idProduct) => {
        alert(numberProduct)
        checkoutMutation2.mutate({ idProduct, quantity_count: numberProduct })
    }

    return (
        <BoxRadius padding='16px' maxW='350px' minW='350px' position={changePosition ? 'fixed' : "absolute"} right='60px' top={changePosition ? '10px' : ''} transition="all 0.3s ease" >
            <Flex flexDir='column' gap='10px'>
                {/* Tiki trading */}
                <Flex gap='20px'>
                    <Avatar src={TIKIAVATAR} />
                    <Box>
                        <Flex align='center' gap="10px">
                            <Text16 title={'Tiki Trading'} fontWeight='500' />
                            <Image src={TAGOFFICE} h='20px' />
                        </Flex>
                        <Flex align='center' gap='10px'>
                            <Text16 title={`${4.7}`} fontWeight='400' />
                            <Image src={STARICON} w='18px' h='18px' />
                            <Text16 title={"5.4tr + đánh giá"} />
                        </Flex>
                    </Box>
                </Flex>
                {/* end Tiki trading */}
                <Text16 title={'Số Lượng'} />
                <Divider />
                {/* start number producut */}
                <Flex gap='10px'>
                    <IconButtonCustom borderRadius={BORDER_RADIUS.radius8} onFc={onDown}>
                        <MinusIcon />
                    </IconButtonCustom>
                    <IconButtonCustom borderRadius={BORDER_RADIUS.radius8}>
                        <Text16 title={`${numberProduct}`} />
                    </IconButtonCustom>
                    <IconButtonCustom borderRadius={BORDER_RADIUS.radius8} onFc={onUp}  >
                        <AddIcon />
                    </IconButtonCustom>
                </Flex>
                {/* end number product */}
                <Text16 title={'Tạm tính'} fontWeight='500' />
                <Price product_price={product.product_price * numberProduct} fontWeight='700' />
                <Flex flexDir='column' gap='8px'>
                    <IconButtonCustom borderRadius={BORDER_RADIUS.radius8} backgroundColor={"red"} >
                        <Link href={`/payment/1/${numberProduct}`}><Text16 title={'Mua ngay'} /></Link>
                    </IconButtonCustom>
                    <IconButtonCustom borderRadius={BORDER_RADIUS.radius8} onFc={() => handleAddToCart(product.id)}>
                        <Text16 title={'Thêm vào giỏ hàng'} />
                    </IconButtonCustom>
                </Flex>
            </Flex>
        </BoxRadius>
    );
}

export default Purcharse;