import * as S from './styled-components'
import type { Products } from '../../hook/useProducts'

interface FormnProps {
    product: Products | null
    onClose: () => void
    onSubmit: React.FormEventHandler<HTMLFormElement>
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeCateg: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeStock: (e: React.ChangeEvent<HTMLInputElement>) => void
    textBtn: string
}

export function FormProduct({ onSubmit,
    onChangeTitle,
    onChangeCateg,
    onChangePrice,
    onChangeStock,
    textBtn,
    product,
    onClose }: FormnProps) {
    return (

        <S.FormProducts onSubmit={onSubmit}>
            <S.LabelProduct>
                Product Name:
                <S.InputProduct
                    type='text'
                    $height={40}
                    name='name'
                    onChange={onChangeTitle}
                    defaultValue={product?.title}
                />
            </S.LabelProduct>

            <S.LabelProduct>
                Category:
                <S.InputProduct
                    type='text'
                    $height={40}
                    name='category'
                    onChange={onChangeCateg}
                    defaultValue={product?.category}
                />
            </S.LabelProduct>

            <S.ContentInfoForm>
                <S.LabelProduct>
                    Price:
                    <S.InputProduct
                        type='number'
                        $width={290}
                        $height={40}
                        name='price'
                        onChange={onChangePrice}
                        defaultValue={product?.price}
                    />
                </S.LabelProduct>

                <S.LabelProduct>
                    Stock:
                    <S.InputProduct
                        type='number'
                        $width={290}
                        $height={40}
                        name='stock'
                        onChange={onChangeStock}
                        defaultValue={product?.stock}
                    />
                </S.LabelProduct>
            </S.ContentInfoForm>

            <S.ContentBtnForm>
                <S.BtnForm type='submit' $primary> {textBtn} </S.BtnForm>
                <S.BtnForm type='button' onClick={onClose}> Cancel </S.BtnForm>
            </S.ContentBtnForm>
        </S.FormProducts>

    )
}