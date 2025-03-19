import { Flex, Image, Radio, RadioGroup } from '@chakra-ui/react';
import React from 'react';
import RECEIPTPAYMENT from '../../../public/icons/payment_01.png'
import PAYPALPAYMENT from '../../../public/icons/payment_02.png'
import { Text12 } from '../../../styles/mixin/TextCustom'
function RadioChoose({ title, icon: compoent }) {
    const [value, setValue] = React.useState('1')
    return (
        <RadioGroup onChange={setValue} value={value} mt='20px'>
            <Flex flexDir='column' gap='20px'>
                <Radio value='1'>
                    <Flex align='center' gap='10px'>
                        <Image src={RECEIPTPAYMENT} h='24px' />
                        <Text12 title={'Thanh toán khi nhận hàng'} />
                    </Flex>
                </Radio>
                <Radio value='2'>
                    <Flex align='center' gap='10px'>
                        <Image src={PAYPALPAYMENT} h='24px' />
                        <Text12 title={'Thanh toán bằng PAYPAL'} />
                    </Flex>
                </Radio>
            </Flex>
        </RadioGroup>
    );
}

export default RadioChoose;