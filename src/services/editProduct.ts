import { api } from './api'

export interface ProductDTO {
  title: string
  category: string
  price: number
  stock: number
}

export async function editProduct( id: number, data: ProductDTO) {
  const response = await api.patch(`/products/${id}`, data)
  console.log(response.data)
  return response.data
}