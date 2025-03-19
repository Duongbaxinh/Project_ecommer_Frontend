import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../Header';
import Footer from '../Footer';
import { Box, Flex } from '@chakra-ui/react';
import SideBar from '../SideBar';
import { BREAK_POINT } from '../../theme/webBreakPoint';

function LayoutContainer({ component: Component, title, isHeader, isFooter, isSidebar, isPrivate, padding }) {
    const naviagate = useNavigate()
    document.title = title + 'tiki shop'
    const [user, setUser] = useState('')
    const [token, setToken] = useState('')
    useEffect(() => {
        if (isPrivate) {
            const user = JSON.parse(localStorage.getItem('userInfo'))
            // const access = JSON.parse(localStorage.getItem('accessToken'))
            if (!user) {
                return naviagate('/')
            }
            setUser(user)
            // setToken(access)
        }
    }, [])
    return (
        <Box w='100%' >
            {isHeader && <Header />}
            <Flex padding='0px 80px' w='100%' >
                {isSidebar && <SideBar />}
                <div style={{ widows: '100%', flexGrow: '1', marginLeft: isSidebar && BREAK_POINT.sidebarWidth }} >
                    {isPrivate ? <Component user={user} token={''} /> : <Component />}
                    {isFooter && <Footer />}
                </div>
            </Flex>

        </Box>
    );
}

export default LayoutContainer;