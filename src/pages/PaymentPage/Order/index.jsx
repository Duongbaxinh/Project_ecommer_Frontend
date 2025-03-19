import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Divider, Flex, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import BoxRadius from '../../../components/micro/BoxRadius/BoxRadius';
import IconButtonCustom from '../../../components/micro/IconButtonCustom';
import Price from '../../../components/micro/Price';
import { Text12, Text16 } from '../../../styles/mixin/TextCustom';
import { BORDER_RADIUS } from '../../../theme/webFoundation';
import { finalPrice, totalDiscount, totalPrice } from '../../../utils/handlePrice';

function Order({ products, user, onOrder, numberOfProduct }) {
    console.log('check product order ::::: ', products, '----------------', numberOfProduct)
    products[0].quantity = Number(numberOfProduct)
    const [showDetail, setShowDetail] = useState(false)
    return (
        <BoxRadius padding='16px' >
            <Flex flexDir='column' gap='10px'>
                <Text16 title={'Đơn hàng'} fontWeight='500' />
                <Flex gap='5px' align='center'>
                    <Text12 title={`${products.length} Đơn hàng.`} />
                    <Link>
                        <Text12 title={showDetail ? 'Thu gọn' : 'Xem thông tin'} color='blue' />
                    </Link>
                    {showDetail ? <ChevronUpIcon onClick={() => setShowDetail(!showDetail)} /> : <ChevronDownIcon onClick={() => setShowDetail(!showDetail)} />}
                </Flex>
                <Divider />
                {/* start Number of products */}
                {showDetail &&
                    (<Flex flexDir='column' gap='15px'>
                        {products.length > 0 && products.map((product) => (
                            <>
                                <Flex key={product.product_id} justify='space-between'>
                                    <Text12 title={`${product.product_quantity} x`} />
                                    <Text12 title={product.product_name} w='150px' noOfLines={2} />
                                    <Price product_price={(product.product_price)} fontSize='13px' />
                                </Flex>
                                <Divider />
                            </>
                        ))}
                    </Flex>)
                }
                {/* end Number of products */}

                {/* start caculate price */}
                <Flex align='center' justify='space-between'>
                    <Text12 title={'Tạm tính'} />
                    <Price product_price={totalPrice(products)} />
                </Flex>
                <Flex align='center' justify='space-between'>
                    <Text12 title={'Phí vận chuyển'} />
                    <Price product_price={15000} />
                </Flex>
                <Flex align='center' justify='space-between'>
                    <Text12 title={'Khuyến mãi vận chuyển'} />
                    <Price product_price={0} />
                </Flex>
                <Flex align='center' justify='space-between'>
                    <Text12 title={'Khuyến mãi giảm giá'} />
                    <Price product_price={totalDiscount(products)} />
                </Flex>
                <Divider />
                {/* end caculate price */}
                <Flex align='center' justify='space-between'>
                    <Text16 title={'Tổng tiền'} />
                    <Price product_price={finalPrice(products, 15000)} />
                </Flex>

                <IconButtonCustom
                    onFc={() => {
                        const totalOrder = finalPrice(products, 15000)
                        return onOrder({
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

export default Order;