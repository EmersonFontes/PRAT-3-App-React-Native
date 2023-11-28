import { ReactNode } from 'react';

interface ModalProps {
    isOpen:boolean
    setModal: ()=> void
    children ?: ReactNode
    title: string,
    bgColor: string
}

export default ModalProps