import { Search2Icon } from '@chakra-ui/icons';
import { Box, Container, Flex, HStack, IconButton, Image, Input, InputGroup, useDisclosure, InputLeftElement, InputRightAddon, Stack, useTheme } from '@chakra-ui/react';
import React from 'react';
import { Link } from '@chakra-ui/react';
import BoxRadius from '../../components/micro/BoxRadius/BoxRadius';
import ItemRetangle from '../../components/micro/ItemRetangle';
import { PROFILE } from '../../config/profile';
import ACCOUNT_ICON from '../../public/icons/account.png';
import CART_ICON from '../../public/icons/cart.png';
import HOME_ICON from '../../public/icons/home.png';
import LOCATION_ICON from '../../public/icons/location.png';
import TIKI_LOGO from '../../public/images/tiki_logo.png';
import { Text14 } from '../../styles/mixin/TextCustom';
import { BOX_SHADOW } from '../../theme/webFoundation';
import Model from '../../components/fixs/Model';
const ITEM_LINKS = [
    {
        path: '#',
        title: 'Nhập khẩu Hàn'
    },
    {
        path: '#',
        title: 'Nhật Âu'
    },
    {
        path: '#',
        title: 'Miễn phí gói quà'
    },
    {
        path: '#',
        title: 'Điện gia dụng'
    },
    {
        path: '#',
        title: 'Xe cộ'
    },
    {
        path: '#',
        title: 'Mẹ và bé'
    },
]

const TEXT = {
    TIM_KIEM: 'Tìm kiếm',
    PLACEHODER: 'Nhập sản phẩm tìm kiếm'
}
function Header(props) {
    const theme = useTheme()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container maxW='100%' p='8px 80px'
            backgroundColor={theme.colors.white}
            marginBottom='16px'
        >
            <Flex w='100%'
                gap='48px'
                placeItems='center'
            >
                {/* LOGO */}
                <Link href='/'>
                    <Image src={TIKI_LOGO} w='72px' h='72px' /></Link>

                {/* INPUT */}
                <Stack flexGrow='1' >
                    <Box>
                        <InputGroup>
                            <InputLeftElement>
                                <Search2Icon />
                            </InputLeftElement>
                            <Input placeholder={TEXT.PLACEHODER}
                                size='md'
                                focusBorderColor={theme.colors.grey[200]}
                            />
                            <InputRightAddon
                                cursor='pointer'
                                _hover={{
                                    backgroundColor: theme.colors.grey[200],
                                    color: theme.colors.blue[200]
                                }}
                            >
                                {TEXT.TIM_KIEM}
                            </InputRightAddon>
                        </InputGroup>
                    </Box>
                    <HStack spacing='10px'>
                        {ITEM_LINKS.map(({ path, title }, index) => (
                            <Link key={index} to={path}>
                                <Text14 color={theme.colors.grey[400]}
                                    title={title} />
                            </Link>
                        ))}
                    </HStack>
                </Stack>

                {/* INFO */}
                <Flex flexDirection='column'
                    h='70px'
                    placeContent='space-between'>
                    <HStack >
                        {/* HOME PAGE */}
                        <ItemRetangle padding='8px' icon={
                            <Image src={HOME_ICON} maxW='24px' maxH='24px' />
                        } title={'Trang Chu'} />
                        {/* ACOUNT */}
                        <Box position='relative' w='100%'>
                            <ItemRetangle
                                onFn={onOpen}
                                padding='8px'
                                icon={<Image src={ACCOUNT_ICON} maxW='24px' maxH='24px' />}
                                title={'Tài khoản'}
                            />
                            {/* --------------START MODEL ----------------- */}
                            <Model isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
                            {/* --------------END MODEL ----------------- */}
                            {/* PROFILE */}
                            <Stack
                                position='absolute'
                                w='100%'
                                top='45px'
                                right='30px'
                                zIndex='9999'
                                visibility='hidden'
                                boxShadow={BOX_SHADOW.shadow01}
                            >
                                <BoxRadius padding='7px 0'>
                                    {PROFILE.map(({ path, title }, index) => (
                                        <Link to={path} key={index} >
                                            <Box
                                                padding='7px 16px'
                                                _hover={{
                                                    backgroundColor: theme.colors.grey[200],
                                                }}
                                            >
                                                <Text14 title={title} />
                                            </Box>
                                        </Link>
                                    ))}
                                </BoxRadius>
                            </Stack>
                        </Box>
                        {/* CART */}
                        <Link href='/cart'>
                            <IconButton borderRadius='8px' border='0'>
                                <Image src={CART_ICON} w='24px' h='24px' />
                            </IconButton></Link>
                    </HStack>
                    <Flex placeItems='flex-end'>
                        <Image src={LOCATION_ICON} w='24px' h='24px' />
                        <Link to='#'>
                            <Text14 color={theme.colors.blue[200]}
                                textDecoration='underline'

                                title='Giao đến:H. Gio Linh, X. Gio Mỹ, Quảng Trị' />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
}

export default Header;