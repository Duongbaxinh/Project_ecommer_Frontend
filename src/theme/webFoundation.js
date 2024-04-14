import { COLOR } from "./webColor"

export const BORDER_RADIUS = {
    radius5: '5px',
    radius8: '8px',
    radius16: '16px',
    radiusCircle: '50%'
}
export const BORDER_WIDTH = {
    bw1: '0.5px',
    bw2: '1px',
    bw3: '1.5px',
    bw4: '2px'
}
export const PADDING = {
    all8: '8px',
    all16: '16px',
    sym1216: '12px 16px',
    sym0716: '7px 16px'
}
export const BOX_SHADOW = {
    shadow01: `0px 0px 5px ${COLOR.grey[200]}`
}
export const POSITION = {
    center: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    flexCenter: (placeItem = 'center', placeContent = 'center') =>
    ({
        flexDir: 'column',
        placeContent: 'center',
        placeItems: 'center'
    }),
    flexColumn: (alignItem = 'flex-start', justifyContent = 'flex-start') => ({
        flexDirection: 'column',
        alignItem: alignItem,
        justifyContent: justifyContent
    })
}
export const GAP_SPACE = {
    gap3: '6px',
    gap4: '8px',
    gap5: '10px',
    gap6: '12px',
    gap7: '14px',
    gap8: '16px',
    gap9: '18px',
    gap10: '20px',
    gap11: '22px',
    gap12: '24px',
    gap13: '26px',
}
