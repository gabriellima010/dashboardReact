import * as S from './styled-components'
import { Table } from '../../components/tableProducts'
import { Modal } from '../../components/modal'
import { FormProduct } from '../../components/formProduct'
import { useState } from 'react';
import { ContextCloseModal } from '../../hook/contextCloseModal'
import { addProduct } from '../../services/addProduct'

const optionsFilter = [
    { value: 'categoria1', label: 'Categoria 1' },
    { value: 'categoria2', label: 'Categoria 2' },
    { value: 'categoria3', label: 'Categoria 3' },
];

export default function Products() {
    const [isOpen, setIsOpen] = useState(false);

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
        <>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Add new Product">
                <ContextCloseModal.Provider value={{setIsOpen}}>
                    <FormProduct 
                        onSubmit = {handleSubmit}
                        onChangeTitle = {(e) => setNameProd(e.target.value)}
                        onChangeCateg = {(e) => setCategoProd(e.target.value)}
                        onChangePrice = {(e) => setPriceProd(e.target.value)}
                        onChangeStock = {(e) => setStockProd(e.target.value)}
                    />
                </ContextCloseModal.Provider>
            </Modal>

            <S.ContentInfo>
                <S.Title>Product Page</S.Title>
                <S.Text>Manage your products in the system.</S.Text>

                <S.ContentHandler>
                    <S.AddProductBtn onClick={() => setIsOpen(true)}>
                        <S.IconAddBtn />
                        Add Product
                    </S.AddProductBtn>
                    <S.FilterSelect name='filter' value=''>
                        <S.FilterOption className='optionStyle' value='' disabled>
                            Filter
                        </S.FilterOption>
                        {optionsFilter.map((item) => (
                            <S.FilterOption key={item.value} value={item.value}>
                                {item.label}
                            </S.FilterOption>
                        ))}
                    </S.FilterSelect>
                </S.ContentHandler>
            </S.ContentInfo>

            <S.ContentBody>
                <Table />
            </S.ContentBody>
        </>
    )
}