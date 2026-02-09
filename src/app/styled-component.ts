import styled from 'styled-components'

const Header = styled.div`
    height: 5vh;
    background-color: var(--color-surface);
`

const Container = styled.div`
    width: 100vw;
    display: flex;
`;

const Col3 = styled.div`
    width: 20%;
    height: 100%;
    padding: var(--space-md);
    border: solid;
    border-width: var( --space-xxs);
    border-color: var( --color-border);
`;

const Col9 = styled.div`
    width: 80%;
    height: 100%;
    padding: var(--space-md);
    border: solid;
    border-width: var( --space-xxs);
    border-color: var( --color-border);
`;

export{
    Container,
    Col3,
    Col9,
    Header
}