import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Link, useToast } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BoxRadius from '../../components/micro/BoxRadius/BoxRadius';
import RadioChoose from '../../components/micro/RadioChoose';
import { fetchDetailProduct, handleOrder } from '../../service/product.service';
import { Text12, Text16 } from '../../styles/mixin/TextCustom';
import { PADDING } from '../../theme/webFoundation';
import Order from './Order';
import { productList } from '../../datas/listProduct';



function PaymentPage({ user }) {
    // lấy product id
    const { id, number } = useParams()
    // thông báo 
    const toast = useToast()

    // xử lý chuyển trang
    const navigate = useNavigate()

    // lấy dữ liệu sản phẩm từ api theo id của sản phẩm
    const { data: products, isLoading, isError } = useQuery({
        queryKey: 'productDetail',
        queryFn: () => fetchDetailProduct(id)
    })

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
            navigate('/orders')
        }, (1000));

    }
    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <p>{isError}</p>

    return (
        <Flex gap='20px'>
            <Flex flexDir='column' flexGrow='1' gap='15px'>
                <BoxRadius padding={PADDING.all16}>
                    <Text16 title={'Chọn hình thức thanh toán'} fontWeight='500' />
                    <RadioChoose icon={<AddIcon />} title={'f'} />
                </BoxRadius>
            </Flex>
            <Flex flexDir='column' gap='15px'>
                <BoxRadius padding={PADDING.all16} w='320px'>
                    <Flex align='center' justify='space-between'>
                        <Text16 title={'Giao tới'} />
                        <Link href='#'> <Text16 title={'Thay đổi'} /></Link>
                    </Flex>
                    <Flex align='center' justify='start' gap='10px'>
                        <Text16 title={`${user.last_name} ${user.first_name}`} fontWeight='500' />
                        <Box w='1px' h='15px' bg='grey'></Box>
                        <Text16 title={`${user.phone}`} fontWeight='500' />
                    </Flex>
                    <Text12 title={`${user.address}`} />
                </BoxRadius>
                <Order products={[productList[id]]} user={user} numberOfProduct={number} onOrder={handleOrderSubmit} />
            </Flex>
        </Flex>
    );
}

export default PaymentPage;