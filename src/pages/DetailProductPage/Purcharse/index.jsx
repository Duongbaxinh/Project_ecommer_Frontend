import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Avatar, Box, Divider, Flex, Image, useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoxRadius from '../../../components/micro/BoxRadius/BoxRadius';
import IconButtonCustom from '../../../components/micro/IconButtonCustom';
import Price from '../../../components/micro/Price';
import STARICON from '../../../public/icons/star_icon.png';
import TAGOFFICE from '../../../public/icons/tag_office.webp';
import TIKIAVATAR from '../../../public/icons/tiki_avatar.jpg.webp';
import { addToCart, checkout } from '../../../service/product.service';
import { Text16 } from '../../../styles/mixin/TextCustom';
import { BORDER_RADIUS } from '../../../theme/webFoundation';
function Purcharse({ changePosition, product, width, height }) {
    const [numberProduct, setNumberProduct] = useState(1)
    const [totalPrice, setTotalPrice] = useState(() => Number.parseInt(product.product_price))
    const scroll = height > 90 && width >= 1280;
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
        // checkoutMutation.mutate({ id_product: product.id, data: product, type: 'up' })
        setTotalPrice(price => price * numberProduct)
        setNumberProduct(() => numberProduct + 1)
    }

    const onDown = () => {
        if (numberProduct > 1) {
            // checkoutMutation.mutate({ id_product: product.id, data: product, type: 'dpwn' })
            setTotalPrice(price => price - Number.parseInt(product.product_price))
            setNumberProduct(() => numberProduct - 1)
        }
    }
    const handleAddToCart = (idProduct) => {
        checkoutMutation2.mutate({ idProduct, quantity_count: numberProduct })
    }

    const handlePurchase = async () => {

        try {


            alert("Purchase successful!");
        } catch (error) {
            console.error("Error purchasing product:", error);
            alert("Purchase failed!");
        }
    };
    return (
        <BoxRadius
            padding='16px'
            maxW='350px'
            minW='350px'
        >
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

                <Price product_price={Number.parseInt(product.product_price) * numberProduct} fontWeight='700' />
                <Flex flexDir='column' gap='8px'>
                    <IconButtonCustom onFc={handlePurchase} borderRadius={BORDER_RADIUS.radius8} backgroundColor={"red"}  >


                        <Text16 title={'Mua ngay'} />


                    </IconButtonCustom>
                    <IconButtonCustom borderRadius={BORDER_RADIUS.radius8} onFc={() => handleAddToCart(product.product_id)}>
                        <Text16 title={'Thêm vào giỏ hàng'} />
                    </IconButtonCustom>
                </Flex>
            </Flex>
        </BoxRadius>
    );
}

export default Purcharse;