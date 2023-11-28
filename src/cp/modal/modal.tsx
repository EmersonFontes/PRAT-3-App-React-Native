
import ModalProps from "./modal.types";
import { Button } from "../button";
import { ViewPrincipal, ViewCentral, ViewFinal, ViewTopo, Botao, Texto } from "./modal.style";


const Modal:React.ElementType<ModalProps> = ({isOpen,setModal,title,children,bgColor}) =>{
    if(isOpen){
        return(
            <ViewPrincipal $background={bgColor}>
               <ViewTopo $background={bgColor}>
                    <Texto>{title}</Texto>
                </ViewTopo>
                <ViewCentral $background={bgColor}>
                    {children}
                </ViewCentral>
                <ViewFinal $background={bgColor}>
                    <Button onPress={setModal}>~(ABRIR)</Button>
                </ViewFinal> 
            </ViewPrincipal>
        );
    }

    return null;
}

export {Modal};