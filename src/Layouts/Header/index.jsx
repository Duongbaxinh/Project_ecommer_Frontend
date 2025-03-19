import { Search2Icon } from '@chakra-ui/icons';
import { Box, Container, Flex, HStack, IconButton, Image, Input, InputGroup, useDisclosure, InputLeftElement, InputRightAddon, Stack, useTheme } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
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
        path: '/dashboard',
        title: 'Create Product'
    },
    {
        path: '/manageproduct',
        title: 'Manage Product'
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
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        const logined = JSON.parse(localStorage.getItem('Logined'))
        if (logined) {
            setIsLogin(logined)
        }
    }, [isLogin])
    const handleLogout = () => {
        localStorage.setItem('Logined', false)
        localStorage.setItem('userInfo', JSON.stringify(null))
        window.location.reload()
    }
    return (
        <Container minW='1280px' p='8px 80px'
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
                            <Link key={index} href={path}>
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
                                title={isLogin ? 'Tài khoản' : 'Log-in'}
                            />
                            {!isLogin ? (
                                <Model isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
                            )
                                : isOpen && (
                                    <Stack

                                        tabIndex={'0'}
                                        // onClick={() => {
                                        //     setTimeout(() => {
                                        //         onClose()
                                        //     }, 200);
                                        // }}
                                        position='absolute'
                                        w='100%'
                                        borderRadius={'15px'}
                                        minW={'250px'}
                                        top='45px'
                                        right='0px'
                                        zIndex='9999'
                                        visibility='visible'
                                        boxShadow={BOX_SHADOW.shadow01}
                                    >
                                        <BoxRadius padding='7px 0'>
                                            {PROFILE.map(({ path, title }, index) => (
                                                <Link href={path} key={index} >
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
                                            <Box
                                                cursor={'pointer'}
                                                padding='7px 16px'
                                                _hover={{
                                                    backgroundColor: theme.colors.grey[200],
                                                }}
                                            >
                                                <Text14 title={'Đăng xuất'} onClick={() => handleLogout()} />
                                            </Box>

                                        </BoxRadius>
                                    </Stack>
                                )
                            }




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

                                title='Giao đến:Hddd. Your H, P.Your P , Da Nang' />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
}

export default Header;