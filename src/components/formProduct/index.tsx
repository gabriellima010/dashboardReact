import { useContext, useState } from 'react';
import { ContextCloseModal } from '../../hook/contextCloseModal'
import { addProduct } from '../../services/addProduct'
import * as S from './styled-components'

export function FormProduct() {
    const {setIsOpen} = useContext(ContextCloseModal)!

    const [nameProd, setNameProd] = useState('');
    const [categProd, setCategoProd] = useState('');
    const [priceProd, setPriceProd] = useState('');
    const [stockProd, setStockProd] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
        await addProduct({
            title: nameProd,
            category: categProd,
            price: Number(priceProd),
            stock: Number(stockProd),
        })

        console.log('Produto cadastrado com sucesso')
        setIsOpen(false)

        } catch (error) {
        console.error('Erro ao cadastrar produto', error)
        }
    }

    return (

        <S.FormProducts onSubmit={handleSubmit}>
            <S.LabelProduct>
                Product Name:
                <S.InputProduct type='text' $height={40} name='name' onChange={(e) => setNameProd(e.target.value)} />
            </S.LabelProduct>

            <S.LabelProduct>
                Category:
                <S.InputProduct type='text' $height={40} name='category' onChange={(e) => setCategoProd(e.target.value)} />
            </S.LabelProduct>

            <S.ContentInfoForm>
                <S.LabelProduct>
                    Price:
                    <S.InputProduct type='number' $width={290} $height={40} name='price' onChange={(e) => setPriceProd(e.target.value)} />
                </S.LabelProduct>

                <S.LabelProduct>
                    Stock:
                    <S.InputProduct type='number' $width={290} $height={40} name='stock' onChange={(e) => setStockProd(e.target.value)} />
                </S.LabelProduct>
            </S.ContentInfoForm>

            <S.ContentBtnForm>
                <S.BtnForm type='submit' $primary> Save </S.BtnForm>
                <S.BtnForm type='button' onClick={()=> setIsOpen(false)}> Cancel </S.BtnForm>
            </S.ContentBtnForm>
        </S.FormProducts>

    )
}