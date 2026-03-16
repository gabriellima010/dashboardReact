import * as S from './styled-components'
import { Table } from '../../components/tableProducts'
import { Modal } from '../../components/modal'
import { FormProduct } from '../../components/formProduct'
import { useState } from 'react'
import { addProduct } from '../../services/addProduct'
import { editProduct } from '../../services/editProduct'
import { deleteProduct } from '../../services/deleteProduct'
import type { Products } from '../../hook/useProducts'
import type { ModalAction } from '../../hook/contextModal'

const optionsFilter = [
    { value: 'categoria1', label: 'Categoria 1' },
    { value: 'categoria2', label: 'Categoria 2' },
    { value: 'categoria3', label: 'Categoria 3' },
];

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState<Products | null>(null)
    const [modalAction, setModalAction] = useState<ModalAction>(null)
    const [nameProd, setNameProd] = useState('');
    const [categProd, setCategoProd] = useState('');
    const [priceProd, setPriceProd] = useState('');
    const [stockProd, setStockProd] = useState('');

    function handleCreate() {
        setSelectedProduct(null)
        setModalAction("create")
    }

    function handleEdit(product: Products) {
        setSelectedProduct(product)
        setModalAction("edit")
    }

    function handleDelete(product: Products) {
        setSelectedProduct(product)
        setModalAction("delete")
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            if(modalAction === 'create'){
                await addProduct({
                    title: nameProd,
                    category: categProd,
                    price: Number(priceProd),
                    stock: Number(stockProd),
                })
                console.log('Produto cadastrado com sucesso')
            }

            if(modalAction === 'edit' && selectedProduct){
                await editProduct(selectedProduct!.id,{
                    title: nameProd,
                    category: categProd,
                    price: Number(priceProd),
                    stock: Number(stockProd),
                })
                console.log('Produto editado com sucesso')
            }

            if(modalAction === 'delete' && selectedProduct){
                await deleteProduct(selectedProduct!.id)
                console.log('Produto deletado com sucesso')
            }

            setModalAction(null)

        } catch (error) {
            console.error('Erro ao fazer a solicitação', error)
        }
    }

    return (
        <>
            <Modal
                isOpen={modalAction !== null}
                onClose={() => setModalAction(null)}
                title={modalAction === "create"
                    ? "Add Product"
                    : modalAction === "edit"
                        ? "Edit Product"
                        : "Delete Product"
                }>
                <FormProduct
                    product={selectedProduct}
                    onSubmit={handleSubmit}
                    onChangeTitle={(e) => setNameProd(e.target.value)}
                    onChangeCateg={(e) => setCategoProd(e.target.value)}
                    onChangePrice={(e) => setPriceProd(e.target.value)}
                    onChangeStock={(e) => setStockProd(e.target.value)}
                    textBtn={modalAction === "create" ? "Create" : modalAction === "edit" ? "Edit" : "Delete"}
                    onClose={() => setModalAction(null)}
                />
            </Modal>

            <S.ContentInfo>
                <S.Title>Product Page</S.Title>
                <S.Text>Manage your products in the system.</S.Text>

                <S.ContentHandler>
                    <S.AddProductBtn onClick={() => handleCreate()}>
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
                <Table onEditProduct={handleEdit} onDeleteProduct={handleDelete}/>
            </S.ContentBody>
        </>
    )
}