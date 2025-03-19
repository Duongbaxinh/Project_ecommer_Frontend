import { Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { commentList } from '../../datas/commentData';
import { productList } from '../../datas/listProduct';
import { useScrollPosition } from '../../hooks/useScroll';
import { caculateRate } from '../../utils/handleRate';
import DetailProduct from './DetailProduct';
import OverviewProduct from './OverviewProduct';
import Purcharse from './Purcharse';
function DetailProductPage(props) {

    // get height of component Detail 
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState(null);
    const [error, setError] = useState("");
    const [detailHeight, setDetailHeight] = useState(0)
    const { changePosition, height, width } = useScrollPosition()
    const [bg, setBg] = useState('')
    const { id } = useParams()
    const handleShowBackground = (value) => {
        setBg(value)
    }

    useEffect(() => {
        setIsLoading(true)
        setProduct(productList[id]);
        setIsLoading(false)
    }, [id])
    if (isLoading) return <h1>Loading...</h1>
    return (
        <Grid
            w='1160px'
            position='relative'
            templateColumns='repeat(3, 1fr)'
            gap={6}
        >
            <GridItem >
                <OverviewProduct
                    // changePosition={changePosition}
                    height={height}
                    width={width}
                    detailHeight={detailHeight}
                    product={product} bg={bg}
                    onShowBackground={handleShowBackground}
                />
            </GridItem>
            <GridItem>
                <DetailProduct
                    onGetHeight={setDetailHeight}
                    product={product}
                    rateProduct={caculateRate(commentList).toFixed(1)} />
            </GridItem>
            <GridItem>
                <Purcharse
                    changePosition={changePosition}
                    product={product}
                    height={height}
                    width={width} />
            </GridItem>
            {/* <GridItem colSpan={2}>
                <Review />
            </GridItem> */}

        </Grid>
    );
}

export default DetailProductPage;