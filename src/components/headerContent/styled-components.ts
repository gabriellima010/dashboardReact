import { FiUser, FiChevronDown    } from 'react-icons/fi';
import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-surface);
    height: 80px;
    border-bottom: solid;
    border-width: var( --space-xxs);
    border-color: var( --color-border);
    padding: 0 var(--space-md) 0 var(--space-md);
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding-right: var(--space-md);
    gap: var(--space-xs);
`

const IconUser = styled(FiUser)`
    font-size: 28px;
    color: var(--color-text-secondary);
    border: solid var(--space-xxs) var(--color-text-secondary);
    border-radius: var(--radius-xl);
    padding: var(--space-xxs);

     &:hover{
        color: var(--color-primary);
        border-color: var(--color-primary);
    }
`
const IconArrow = styled(FiChevronDown)`
    font-size: 18px;
    color: var(--color-text-secondary);

     &:hover{
        color: var(--color-primary);
    }
`

export{
    Header,
    Wrapper,
    IconUser,
    IconArrow  
}