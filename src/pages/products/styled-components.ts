import styled from 'styled-components'

import { FaPlus } from "react-icons/fa";

const Title = styled.h1`
    font-size: var(--text-xl);
    margin: 0 0 var(--space-sm) 0;
`

const Text = styled.p`
    font-size: var(--text-md);
    font-weight: var(--text-w-bold);
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-md) 0;

`

const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: var(--space-xxl);
    gap: var(--space-md);
    margin-top: var(--space-lg);
`

const ContentHandler = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: var(--space-md);
    border: solid;
    border-width: var( --space-xxs) 0 var( --space-xxs) 0;
    border-color: var( --color-border);
    padding: var(--space-md);
`

const ContentBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;;
    flex-direction: column;
    padding: 0 var(--space-xxl) var(--space-xxl) var(--space-xxl);
    gap: 16px;
`

const AddProductBtn = styled.button`
    width: 165px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: var( --color-primary);
    color: var( --color-text-primary);
    font-size: var(--text-md);
    font-weight: var(--text-w-bold);
    border-radius: var(--radius-md);
    cursor: pointer;

    &:hover{
        background-color: var( --color-primary-hover);
        color: var( --color-text-primary);
    }
`

const IconAddBtn = styled(FaPlus)`
    color: var( --color-text-primary);
    font-size: 16px;
    font-weight: var(--text-w-bold);
`

const FilterSelect = styled.select`
    width: 215px;
    height: 45px;
    border-radius: var(--radius-md);
    font-size: var(--text-md);
    font-weight: var(--text-w-bold);
    color: var(--color-text-secondary);
    background-color: var( --color-card);
    border: 1px solid var(--color-border);
    padding: 0 var(--space-md);
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: var(--color-primary);
    }
`
const FilterOption = styled.option`
    background-color: var( --color-card);
    color: var(--color-text-secondary);
    font-weight: var(--text-w-bold);

    &:hover{
        background-color: var(--color-bg-light) !important;
        color: var( --color-text-hover);
    }
`

export{
    Title,
    Text,
    ContentInfo,
    ContentHandler,
    ContentBody,
    AddProductBtn,
    IconAddBtn,
    FilterSelect,
    FilterOption,
}
