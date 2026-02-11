import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    gap: var(--space-md);
    height: calc(100% - 80px);
    border: solid;
    border-width: 0 var( --space-xxs) var( --space-xxs) 0;
    border-color: var( --color-border);
    padding: var( --space-md);
`;

const ListContent = styled.ul`
    margin: 0;
    padding: var( --space-md);
    width: 100%;
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    list-style-type: none;
    color: var(--color-text-secondary);
    font-size: var(--text-lg);
    font-weight: var(--text-w-bold);
    height: 60px;
    padding-left: var(--space-md);

    &:hover{
        background-color: var(--color-bg-light);
        border-radius: var(--radius-md);
        color: var( --color-text-hover);
    }

    &:active{
        background-color: var(--color-bg-light);
        border-radius: var(--radius-md);
        color: var( --color-text-hover);
    }
`

const IconList = styled.span`
    display: flex;
    margin-right: var(--space-md);
    font-size: 20px;
`

export{
    Content,
    ListContent,
    ListItem,
    IconList
}
