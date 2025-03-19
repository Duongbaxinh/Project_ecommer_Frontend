import { Divider, Flex, useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { handleOrder } from '../../../service/product.service';
import { Link, useNavigate } from 'react-router-dom';
import { Text12, Text16 } from '../../../styles/mixin/TextCustom';
import { BORDER_RADIUS } from '../../../theme/webFoundation';
import BoxRadius from '../../../components/micro/BoxRadius/BoxRadius';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Price from '../../../components/micro/Price';
import { finalPriceCart, totalPriceCart } from '../../../utils/handlePrice';
import IconButtonCustom from '../../../components/micro/IconButtonCustom';

function OrderCart({ carts, user }) {
    const toast = useToast();
    const navigate = useNavigate()
    const [showDetail, setShowDetail] = useState(false)
    const { mutate } = useMutation({
        mutationFn: (order) => {
            handleOrder(order)
        }
    })
    const handleOrderSubmit = (order) => {
        mutate(order)
        toast({
            title: 'Successfully!',
            description: 'Order successfully',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
        setTimeout(() => {
            navigate('/')
        }, (1000));

    }
    return (
        <BoxRadius padding='16px' >
            <Flex flexDir='column' gap='10px'>
                <Text16 title={'Đơn hàng'} fontWeight='500' />
                <Flex gap='5px' align='center'>
                    <Text12 title={`${carts.length} Đơn hàng.`} />
                    <Link>
                        <Text12 title={showDetail ? 'Thu gọn' : 'Xem thông tin'} color='blue' />
                    </Link>
                    {showDetail ? <ChevronUpIcon onClick={() => setShowDetail(!showDetail)} /> : <ChevronDownIcon onClick={() => setShowDetail(!showDetail)} />}
                </Flex>
                <Divider />
                {/* start Number of carts */}
                {showDetail &&
                    (<Flex flexDir='column' gap='15px'>
                        {carts.length > 0 && carts.map((cart) => (
                            <>
                                <Flex key={cart.product_id.id} justify='space-between'>
                                    <Text12 title={`${cart.quantity_count} x`} />
                                    <Text12 title={cart.product_id.product_name} w='150px' noOfLines={2} />
                                    <Price product_price={(cart.product_id.product_price)} fontSize='13px' />
                                </Flex>
                                <Divider />
                            </>
                        ))}
                    </Flex>)
                }
                {/* end Number of carts */}

                {/* start caculate price */}
                <Flex align='center' justify='space-between'>
                    <Text12 title={'Tạm tính'} />
                    <Price product_price={totalPriceCart(carts)} />
                </Flex>
                <Flex align='center' justify='space-between'>
                    <Text12 title={'Phí vận chuyển'} />
                    <Price product_price={15000} />
                </Flex>
                <Flex align='center' justify='space-between'>
                    <Text12 title={'Khuyến mãi vận chuyển'} />
                    <Price product_price={0} />
                </Flex>

                <Divider />
                {/* end caculate price */}
                <Flex align='center' justify='space-between'>
                    <Text16 title={'Tổng tiền'} />
                    <Price product_price={finalPriceCart(carts, 15000)} />
                </Flex>

                <IconButtonCustom
                    onFc={() => {
                        const totalOrder = finalPriceCart(carts, 15000)
                        return handleOrderSubmit({
                            receiver_name: (user.last_name + user.first_name),
                            receiver_phone: user.phone,
                            receiver_address: user.address,
                            // is_ordered: true,
                            is_paid: false,
                            status: 2,
                            total: totalOrder,
                            description: 'order-001',
                            user_id: user.id
                        })
                    }}
                    borderRadius={BORDER_RADIUS.radius8} bg='red'
                    border='0' color='white' fontWeight='500' h='40px'>
                    <Text16 title={'Đặt hàng'} />
                </IconButtonCustom>
            </Flex>
        </BoxRadius>
    );
}

export default OrderCart;