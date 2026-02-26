import styled from 'styled-components'
import { FaPen, FaRegTrashAlt } from "react-icons/fa";

const StyledTable = styled.table`
    width: 100%;
    border: var(--space-xxs) solid  var( --color-border);
    border-radius: var(--radius-md);
    border-collapse: separate;
    border-spacing: 0;
`

const Th = styled.th`
    background-color: var(--color-surface);
    text-align: left;
    padding: var(--space-md);
    border-bottom: var(--space-xxs) solid  var( --color-border);
    border-right: var(--space-xxs) solid  var( --color-border);

    &:last-child{
        border-right: none;
    }
`  

const Td = styled.td`
    text-align: left;
    padding: var(--space-lg) var(--space-md);
    border-bottom: var(--space-xxs) solid  var( --color-border);

    &:last-child{
        width: 15%;
    }
`

const BtnContent = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-md)
`

const BtnEdit = styled.button`
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var( --color-primary);
    color: var( --color-text-primary);
    border-radius: var(--radius-md);
    cursor: pointer;

    &:hover{
        background-color: var( --color-primary-hover);
        color: var( --color-text-primary);
    }
`

const BtnDelete = styled.button`
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var( --color-danger);
    color: var( --color-text-primary);
    border-radius: var(--radius-md);
    cursor: pointer;

    &:hover{
        background-color: var( --color-danger-hover);
        color: var( --color-text-primary);
    }
`

const ContentPagination = styled.div`
    display: flex;
    gap: 5px;
`

const ButtonPagination = styled.button`
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var( --color-primary);
    color: var( --color-text-primary);
    border-radius: var(--radius-md);
    cursor: pointer;

    &:hover{
        background-color: var( --color-primary-hover);
        color: var( --color-text-primary);
    }
`

const QntProductSelect = styled.select`
    width: 55px;
    height: 45px;
    border-radius: var(--radius-md);
    font-size: var(--text-md);
    font-weight: var(--text-w-bold);
    color: var(--color-text-secondary);
    background-color: var( --color-card);
    border: 1px solid var(--color-border);
    padding-left: var(--space-sm);

    cursor: pointer;

    &:focus {
        outline: none;
        border-color: var(--color-primary);
    }
`

const IconEdit = styled(FaPen)`
    color: var( --color-text-primary);
    font-size: 18px;
    font-weight: var(--text-w-bold);
`

const IconDelete = styled(FaRegTrashAlt)`
    color: var( --color-text-primary);
    font-size: 16px;
    font-weight: var(--text-w-bold);
`

export{
    StyledTable,
    Th,
    Td,
    BtnContent,
    BtnEdit,
    BtnDelete,
    IconEdit,
    IconDelete,
    ContentPagination,
    ButtonPagination,
    QntProductSelect,
}
