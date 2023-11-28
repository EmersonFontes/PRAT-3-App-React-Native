import styled from "styled-components/native";
import { LabelProps } from "./label.types";


const Texto = styled.Text<LabelProps>`
font-size: ${p=>p.fontSize === null ? '12px' : p.fontSize};
background-color: ${p=>p.bgColor};
color: ${p=>p.color};
`;

export {Texto}