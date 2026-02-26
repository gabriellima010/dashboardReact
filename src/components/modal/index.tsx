import * as S from './styled-components'

interface ModalProps{ 
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps){
    if(!isOpen) return null
    return(

        <S.Overlay>
            <S.StyledModal>
                <S.HeaderModal>
                    <S.Title>{title}</S.Title>
                    <S.IconCloseBtn onClick={onClose}/>
                </S.HeaderModal>
                <S.BodyModal>
                    {children}
                </S.BodyModal>
            </S.StyledModal>
        </S.Overlay>
    )
}