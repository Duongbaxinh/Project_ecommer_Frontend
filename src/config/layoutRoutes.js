import { SCREEN_URL } from "../libs/constants"
import { CartPage, HomePage, DetailProductPage, PaymentPage, OrderPage } from "../pages"

export const layoutRoutes = [
    {
        path: SCREEN_URL.HOME,
        component: HomePage,
        title: 'home',
        isSidebar: true,
        isHeader: true,
        isFooter: true,
        isPrivate: false,
        padding: '0 80px'
    },
    {
        path: SCREEN_URL.PAYMENT,
        component: PaymentPage,
        isSidebar: false,
        isHeader: true,
        isFooter: true,
        isPrivate: true,
        padding: '0 80px'
    },
    {
        path: SCREEN_URL.CART,
        component: CartPage,
        title: 'cart',
        isSidebar: false,
        isHeader: true,
        isFooter: true,
        isPrivate: true,
        padding: '0 10px'
    },
    {
        path: SCREEN_URL.DETAILPRODUCT,
        component: DetailProductPage,
        title: 'detailProduct',
        isSidebar: false,
        isHeader: true,
        isFooter: true,
        isPrivate: false,
        padding: '0 10px'
    },
    {
        path: SCREEN_URL.ORDER,
        component: OrderPage,
        title: 'detailProduct',
        isSidebar: false,
        isHeader: true,
        isFooter: true,
        isPrivate: true,
        padding: '0 10px'
    }
]