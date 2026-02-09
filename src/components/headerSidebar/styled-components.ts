import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-md);
    background-color: var(--color-surface);
    height: 80px;
    border: solid;
    border-width: 0 var( --space-xxs) var( --space-xxs) 0;
    border-color: var( --color-border);
    padding-left: var(--space-md); 
`;

const Logo = styled.img`
    width: 35px;
    height: auto;
`;

const Title = styled.h1`
    font-size: var( --text-lg);
`;

export{
    Header,
    Logo,
    Title,
}
