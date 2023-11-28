import React from "react";
import { SplitProps } from "./split.types";
import { ViewColuna, ViewLinha, ViewPrincipal} from './split.styles';

const SplitBoard:React.ElementType<SplitProps> = ({size,bgColorZona1,bgColorZona2,direcao,zona1,zona2,onTouchStart}) => {
  
    return (
      <ViewPrincipal $direcao = {direcao} onTouchStart={onTouchStart}>

        { direcao == "coluna" && 
            <>
              <ViewColuna $size={size} $background={bgColorZona1}>{zona1}</ViewColuna>
              <ViewColuna $size={`calc(100% - ${size})`} $background={bgColorZona2}>{zona2}</ViewColuna>
            </>
        }
        { direcao == "linha" &&
            <>
              <ViewLinha $size={size} $background={bgColorZona1}>{zona1}</ViewLinha>
              <ViewLinha $size={`calc(100% - ${size})`} $background={bgColorZona2}>{zona2}</ViewLinha>
            </>
        }

      </ViewPrincipal>
    );
  };

  export {SplitBoard}