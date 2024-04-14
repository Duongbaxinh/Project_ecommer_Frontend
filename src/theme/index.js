import { extendTheme } from '@chakra-ui/react'
import { COLOR } from './webColor'
import { Button } from './webComponent'
import { FONT_SIZE } from './webFontSize'
import { styles } from './webGlobal'
export const themeCustom = extendTheme({
    colors: COLOR,
    fonts: FONT_SIZE,
    styles: styles,
    components: {
        Button,
    },
})