import { useQuery } from "@tanstack/react-query"
import { api } from '../services/api'

export interface Products {
    id: number;
    title: string;
    category: string;
    stock: number;
    price: number;
}

export interface ProductsResponse {
    products: Products[];
    total: number;
    skip: number;
    limit: number;
}

export function useProducts(pageIndex: number, pageSize: number) {

    const handleMutation = async () => {
        const skip = pageIndex * pageSize

        const response = await api.get(
            `/products?limit=${pageSize}&skip=${skip}`
        )

        return response.data
    }

    return useQuery<ProductsResponse>({
        queryKey: ['products', pageIndex, pageSize],
        queryFn: () => handleMutation(),
    })
}