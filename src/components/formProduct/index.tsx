import { useContext } from 'react';
import { ContextCloseModal } from '../../hook/contextCloseModal'
import * as S from './styled-components'

export function FormProduct() {
    const {setIsOpen} = useContext(ContextCloseModal)!
    return (

        <S.FormProducts>
            <S.LabelProduct>
                Product Name:
                <S.InputProduct type='text' $height={40} name='name' />
            </S.LabelProduct>

            <S.LabelProduct>
                Category:
                <S.InputProduct type='text' $height={40} name='Category' />
            </S.LabelProduct>

            <S.ContentInfoForm>
                <S.LabelProduct>
                    Price:
                    <S.InputProduct type='number' $width={290} $height={40} name='price' />
                </S.LabelProduct>

                <S.LabelProduct>
                    Stock:
                    <S.InputProduct type='number' $width={290} $height={40} name='stock' />
                </S.LabelProduct>
            </S.ContentInfoForm>

            <S.ContentBtnForm>
                <S.BtnForm type='submit' $primary> Save </S.BtnForm>
                <S.BtnForm type='button' onClick={()=> setIsOpen(false)}> Cancel </S.BtnForm>
            </S.ContentBtnForm>
        </S.FormProducts>

    )
}