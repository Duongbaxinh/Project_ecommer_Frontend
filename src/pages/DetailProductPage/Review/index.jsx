import { ChatIcon, QuestionOutlineIcon, WarningIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import React, { useReducer } from 'react';
import BoxRadius from '../../../components/micro/BoxRadius/BoxRadius';
import Chip from '../../../components/micro/Chip';
import GroupStart from '../../../components/sclup/GroupStart';
import { commentList } from '../../../datas/commentData';
import { Text10, Text11, Text12, Text14, Text16 } from '../../../styles/mixin/TextCustom';
import { COLOR } from '../../../theme/webColor';
import { BORDER_RADIUS, PADDING } from '../../../theme/webFoundation';
import { convertDateToString } from '../../../utils/handleDate';
import { caculatePercent, caculateRate, getAllImageComment } from '../../../utils/handleRate';


const FILTER = {
    'DATE': 'date',
    'STAR': 'star',
    'IS_IMAGE': 'isImage'
}

const reducer = (state, action) => {
    switch (action.type) {
        case FILTER.DATE:
            const sortDate = action.data.sort((comment1, comment2) => comment1.date - comment2.date)
            return sortDate;
        case FILTER.STAR:
            const sortStar = action.data.filter((comment) => comment.rate === action.rate)
            return [...sortStar];
        default:
            break;
    }
}

const categoryList = [
    { text: 'Mới nhất', type: FILTER.DATE },
    { text: 'Có hình ảnh', type: FILTER.IS_IMAGE },
    { text: '1 Sao', type: FILTER.STAR },
    { text: '2 Sao', type: FILTER.STAR },
    { text: '3 Sao', type: FILTER.STAR },
    { text: '4 Sao', type: FILTER.STAR },
    { text: '5 Sao', type: FILTER.STAR },
]
function Review() {
    const [state, dispatch] = useReducer(reducer, commentList)
    return (
        <BoxRadius marginTop='30px' padding={PADDING.all16}>
            <Text16 title={'Khách hàng đánh giá'} fontWeight='500' />
            {/*  start 1  */}
            <Flex gap='50px'>
                <Flex padding='16px 0' flexDir='column' gap='10px' w='40%'>
                    <Text14 title='Tổng quan' fontWeight='400' />
                    <Flex alignItems='center'
                        gap='10px' >
                        <Text fontSize='30px' fontWeight='500'>{`${caculateRate(commentList)}`}</Text>
                        <GroupStart numberOfStart={5} />
                    </Flex>
                    <Text14 title={`( ${commentList.length} Đánh giá )`} />
                    {Array.from({ length: 5 }, (_, i) => i).map(
                        (star) => (<Flex placeItems='center' placeContent='center' gap='10px'>
                            <GroupStart w='14px' h='14px' numberOfStart={((star - 5)) * -1} />
                            <Box w={'100%'}
                                backgroundColor={COLOR.grey[100]}
                                borderRadius='10px'
                                position='relative'
                                h='8px'>
                                <Box position='absolute'
                                    borderRadius='10px'
                                    width={`${caculatePercent({ commentList, n: (star - 5) * -1 })}%`}
                                    h='8px' backgroundColor='blue' ></Box>
                            </Box>
                            <span>{((star - 5)) * -1}</span>
                        </Flex>)
                    )}
                </Flex>
                <Box>
                    <Text14 title='Tất cả hình ảnh' />
                    <Flex gap='10px'>
                        {getAllImageComment(commentList).map((image) =>
                            <Box w='69px' h='69px' borderRadius={BORDER_RADIUS.radius8}>
                                <img src={image} w='100%' h='100%' alt='' />
                            </Box>
                        )}
                    </Flex>
                </Box>
            </Flex>
            {/* end 1 */}
            <Divider />
            {/* start 2 */}
            <Box padding='16px 0'>
                <Text14 title='Lọc Theo' fontWeight='400' />
                <Flex gap='10px' padding='10px 0'>
                    {categoryList.map(({ text, type }) => (
                        <Box onClick={() => dispatch({ type: type, data: commentList, rate: Number(text.split(' ')[0]) })} cursor='pointer' padding='8px 16px' borderRadius='30px' border={`1px solid  ${COLOR.grey[200]}`}>
                            <Text12 title={text} />
                        </Box>
                    ))}

                </Flex>
            </Box>
            <Divider />
            {/* end 2 */}

            {/* start review of customers */}
            {state && state.map(({ id, productId, user, imageList, content, rate, datetime }) => (
                <>
                    <Flex padding=' 16px 0' gap='30px' key={id}>
                        <Flex flexDir='column' gap='8px' w='250px'>
                            <Flex placeContent={'flex-start'} placeItems='center' gap='15px'>
                                <Avatar src={user.avatar} />
                                <Box>
                                    <Text14 title={user.email} />
                                    <Text10 title={convertDateToString(datetime)} />
                                </Box>
                            </Flex>
                            <Flex placeContent='space-between' placeItems={'center'}>
                                <Chip leading={<ChatIcon />} title={'Đã viết'} />
                                <Text12 title={`${8} Đánh giá`} />
                            </Flex>
                            <Divider />
                            <Flex placeContent='space-between' placeItems={'center'}>
                                <Chip leading={<QuestionOutlineIcon />} title={'Đã nhận'} />
                                <Text12 title={`${30} Lượt cảm ơn`} />
                            </Flex>
                        </Flex>

                        <Flex flexDir='column' gap='8px' w='100%'>
                            <Chip leading={<GroupStart numberOfStart={rate} w='14px' h='14px' />} />
                            <Text> {content}</Text>

                            <Flex gap='15px'>
                                {imageList && imageList.map((image) => (
                                    <Image src={image} alt='' w='49px' h='49px' />
                                ))}</Flex>
                            <Text11 title={`${convertDateToString(datetime)}`} />
                            <Flex placeItems={'center'} placeContent={'space-between'} w='100%'>
                                <Flex gap='20px'>
                                    <Chip leading={<ChatIcon />} title={'Likes'} />
                                    <Chip leading={<ChatIcon />} title={'Bình luận'} />
                                </Flex>
                                <Chip leading={<WarningIcon />} title={'Chia sẻ'} />
                            </Flex>
                        </Flex>


                    </Flex>
                    <Divider />
                </>
            ))}
            {/* review of customers */}
        </BoxRadius>
    );
}

export default Review;