import { api } from './api'

export async function deleteProduct(id: number) {
  const response = await api.delete(`/products/${id}`)
  console.log(response.data)
  return response.data
}