import { useQuery } from "@tanstack/react-query"
import { api } from '../services/api'

export interface Products{
    id: number;
    title: string;
    category: string;
    stock: number;
    price: number;
}

export function useProducts() {
    return useQuery<Products[]>({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await api.get('/products?limit=10')
            return response.data.products;
        },     
    });
}