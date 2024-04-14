import { Text } from "@chakra-ui/react"
import { FONT_SIZE } from "../../../theme/webFontSize"


export const Text10 = ({ title, ...rest }) => {
    return <Text {...rest}
        fontSize={FONT_SIZE.xxs}
    >{title}</Text>
}

export const Text11 = ({ title, ...rest }) => {
    return <Text {...rest}
        fontSize={FONT_SIZE.xs}
    >{title}</Text>
}
export const Text12 = ({ title, ...rest }) => {
    return <Text {...rest}
        fontSize={FONT_SIZE.sm}
    >{title}</Text>
}

export const Text14 = ({ title, ...rest }) => {
    return <Text {...rest}
        fontSize={FONT_SIZE.md}
    >{title}</Text>
}

export const Text15 = ({ title, ...rest }) => {
    return <Text {...rest}
        fontSize={FONT_SIZE.lg}
    >{title}</Text>
}
export const Text16 = ({ title, ...rest }) => {
    return <Text {...rest}
        fontSize={FONT_SIZE.xl}
    >{title}</Text>
}