import { COLOR } from "./webColor";
import { BORDER_RADIUS, PADDING } from "./webFoundation";

export const styles = {
    global: {
        'html, body': {
            backgroundColor: COLOR.grey[100],
            scrollBehavior: 'smooth',
            margin: '0',
            padding: '0',
        },
        '*': {
            boxSizing: 'border-box',
        },
        '*::before, *::after': {
            boxSizing: 'border-box',
        },
        '::-webkit-scrollbar': {
            width: '2px'
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: 'transparent'
        }
    },
    borderRadius: BORDER_RADIUS,
    padding: PADDING
}
