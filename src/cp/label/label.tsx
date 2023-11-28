
import {View, Text} from 'react-native'
import { Texto } from './label.styles';
import { LabelProps } from './label.types';
const Label: React.ElementType<LabelProps> = ({fontSize,bgColor,color,texto})=>{

    return (
        <Texto fontSize={fontSize} bgColor={bgColor} color={color}>{texto}</Texto>
    );
}


export {Label}