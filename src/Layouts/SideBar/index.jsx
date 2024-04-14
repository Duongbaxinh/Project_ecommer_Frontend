import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BoxRadius from '../../components/micro/BoxRadius/BoxRadius';
import { BREAK_POINT } from '../../theme/webBreakPoint';
import { SIDEBAR_ITEMS } from '../../config/sidebarItem';
import ItemRetangle from '../../components/micro/ItemRetangle';
import { Text14 } from '../../styles/mixin/TextCustom';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useScrollPosition } from '../../hooks/useScroll';


function SideBar(props) {
    const theme = useTheme()
    const changePosition = useScrollPosition()
    return (
        <BoxRadius
            position={changePosition ? 'fixed' : "absolute"}
            top={changePosition ? '10px' : ''}
            backgroundColor={theme.colors.grey[100]}
            h='95vh'
            maxH='100vh'
            maxW={BREAK_POINT.sidebarWidth}
            overflow='auto'
            padding='0px'
        >
            <Flex
                flexDirection='column'
                gap='15px'
                padding=' 0 8px'
            >
                <BoxRadius >
                    <Text14 title='Danh muc' fontWeight='bold' paddingLeft='8px' />
                    {SIDEBAR_ITEMS.map(({ path, title, icon }, index) => (
                        <Link key={index} to={path}>
                            <ItemRetangle key={index} padding='8px 8px' icon={<Image src={icon} maxW='32px' maxH='32px' />}
                                title={title} />
                        </Link>
                    ))}
                </BoxRadius >
                <BoxRadius >
                    <Text14 title='Noi bat' fontWeight='bold' paddingLeft='8px' />
                    {SIDEBAR_ITEMS.map(({ path, title, icon }, index) => (
                        <ItemRetangle key={index} padding='8px 8px' icon={<Image src={icon} maxW='32px' maxH='32px' />}
                            title={title} />
                    ))}
                </BoxRadius >
            </Flex>
        </BoxRadius>

    );
}

export default SideBar;