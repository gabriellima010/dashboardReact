import * as S from './styled-components'

const optionsFilter = [
    { value: 'categoria1', label: 'Categoria 1' },
    { value: 'categoria2', label: 'Categoria 2' },
    { value: 'categoria3', label: 'Categoria 3' },
];

export default function Products() {
    return(
        <S.ContentInfo>
            <S.Title>Product Page</S.Title>
            <S.Text>Manage your products in the system.</S.Text>

            <S.ContentHandler>
                <S.AddProductBtn>
                    <S.IconAddBtn/>
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
    )
}