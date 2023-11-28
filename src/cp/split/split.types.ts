import React from "react"
import {GestureResponderEvent} from "react-native"
interface SplitProps  {
    direcao: 'coluna' | 'linha',
    bgColorZona1: string,
    bgColorZona2: string,
    size: string,
    zona1: React.ReactElement ,
    zona2: React.ReactElement,
    onTouchStart: ((event: GestureResponderEvent) => void) | undefined
}

export {SplitProps}
