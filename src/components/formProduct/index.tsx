import { useContext } from 'react';
import { ContextCloseModal } from '../../hook/contextCloseModal'
import * as S from './styled-components'

interface FormnProps{ 
    onSubmit: React.FormEventHandler<HTMLFormElement>
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeCateg: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeStock: (e: React.ChangeEvent<HTMLInputElement>) => void
    textBtn: string
}

export function FormProduct({onSubmit, onChangeTitle, onChangeCateg, onChangePrice, onChangeStock, textBtn} : FormnProps) {
    const {setIsOpen} = useContext(ContextCloseModal)!

    return (

        <S.FormProducts onSubmit={onSubmit}>
            <S.LabelProduct>
                Product Name:
                <S.InputProduct type='text' $height={40} name='name' onChange={onChangeTitle} />
            </S.LabelProduct>

            <S.LabelProduct>
                Category:
                <S.InputProduct type='text' $height={40} name='category' onChange={onChangeCateg} />
            </S.LabelProduct>

            <S.ContentInfoForm>
                <S.LabelProduct>
                    Price:
                    <S.InputProduct type='number' $width={290} $height={40} name='price' onChange={onChangePrice} />
                </S.LabelProduct>

                <S.LabelProduct>
                    Stock:
                    <S.InputProduct type='number' $width={290} $height={40} name='stock' onChange={onChangeStock} />
                </S.LabelProduct>
            </S.ContentInfoForm>

            <S.ContentBtnForm>
                <S.BtnForm type='submit' $primary> {textBtn} </S.BtnForm>
                <S.BtnForm type='button' onClick={()=> setIsOpen(false)}> Cancel </S.BtnForm>
            </S.ContentBtnForm>
        </S.FormProducts>

    )
}