import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table"
import * as S from './styled-components'
import { useProducts } from '../../hook/useProducts'
import type { ColumnDef } from "@tanstack/react-table";
import type { Products } from '../../hook/useProducts';
import { useState } from "react";
import { FaAngleRight, FaAngleLeft, FaAngleDoubleRight, FaAngleDoubleLeft} from "react-icons/fa";

const columns: ColumnDef<Products>[] = [
    { header: "Id", accessorKey: "id" },
    { header: "Name", accessorKey: "title" },
    { header: "Category", accessorKey: "category" },
    { header: "Stock", accessorKey: "stock" },
    {
        header: "Actions",
        cell: () => {
            return (
                <S.BtnContent>
                    <S.BtnEdit>
                        <S.IconEdit />
                    </S.BtnEdit>

                    <S.BtnDelete>
                        <S.IconDelete />
                    </S.BtnDelete>
                </S.BtnContent>
            );
        },
    },
]

export function Table() {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    })

    const { data , isLoading, isError } = useProducts(
        pagination.pageIndex,
        pagination.pageSize
    )

    const table = useReactTable({
        data: data?.products ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        onPaginationChange: setPagination,
        state: { pagination },
        rowCount: data?.total ?? 0, 
    })

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Not found products...</p>;

    return (
        <>
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
            <S.ContentPagination>
                <S.ButtonPagination
                    onClick={() => table.firstPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <FaAngleDoubleLeft />
                </S.ButtonPagination>

                <S.ButtonPagination
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <FaAngleLeft />
                </S.ButtonPagination>

                <S.QntProductSelect
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </S.QntProductSelect>

                <S.ButtonPagination
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <FaAngleRight />
                </S.ButtonPagination>

                <S.ButtonPagination
                    onClick={() => table.lastPage()}
                    disabled={!table.getCanNextPage()}
                >
                   <FaAngleDoubleRight />
                </S.ButtonPagination>
            
            </S.ContentPagination>
        </>

    )

}
