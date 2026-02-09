import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--color-surface);
    height: 80px;
    border-bottom: solid;
    border-width: var( --space-xxs);
    border-color: var( --color-border);
    padding: 0 var(--space-sm) 0 var(--space-sm);
`;

const Title = styled.h1`
    font-size: var( --text-lg);
`;

export{
    Header,
    Title  
}