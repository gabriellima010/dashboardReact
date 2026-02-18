import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table"
import * as S from './styled-components'

const data = [
    {id: 1, name: "Product 1", category: "Categoria 1", stock: 45},
    {id: 2, name: "Product 2", category: "Categoria 2", stock: 50},
    {id: 3, name: "Product 3", category: "Categoria 3", stock: 70}
]

const columns = [
    {header: "Id", accessorKey: "id"},
    {header: "Name", accessorKey: "name"},
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
    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel(),
    })

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
