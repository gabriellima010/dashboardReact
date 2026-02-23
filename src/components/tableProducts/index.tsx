import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table"
import * as S from './styled-components'
import { useProducts } from '../../hook/useQuery'
import type { ColumnDef } from "@tanstack/react-table";
import type { Products } from '../../hook/useQuery';

const columns: ColumnDef<Products>[] = [
    {header: "Id", accessorKey: "id"},
    {header: "Name", accessorKey: "title"},
    {header: "Category",accessorKey: "category"},
    {header: "Stock",accessorKey: "stock"},
    {header: "Actions",
    cell: () => {
        return (
            <S.BtnContent>
                <S.BtnEdit>
                    <S.IconEdit/>
                </S.BtnEdit>

                <S.BtnDelete>
                    <S.IconDelete/>
                </S.BtnDelete>         
            </S.BtnContent>
        );
        },
    },
]

export function Table(){
    const {data: products = [], isLoading, isError } = useProducts();

    const table = useReactTable({
        data: products, columns, getCoreRowModel: getCoreRowModel(),
    })

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Not found products...</p>;

   return(
    <S.StyledTable>
        <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                   {headerGroup.headers.map((header) => (
                        <S.Th key={header.id}>
                            {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                            )}
                        </S.Th>
                    ))}
                </tr>
            ))}
        </thead>

        <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                        <S.Td key={cell.id}>
                           {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )} 
                        </S.Td>
                    ))}
                </tr>
            ))}
        </tbody>
    </S.StyledTable>

   ) 

}
