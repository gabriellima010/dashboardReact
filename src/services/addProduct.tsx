import { api } from '../services/api'

export interface ProductDTO {
  title: string
  category: string
  price: number
  stock: number
}

export async function addProduct(data: ProductDTO) {
  const response = await api.post('/products/add', data)
  console.log(response.data)
  return response.data
}