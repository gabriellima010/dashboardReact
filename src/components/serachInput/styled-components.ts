import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 var(--space-md);
    background-color: var(--color-bg-light);
    border: solid 1px var( --color-border-light);
    border-radius: var(--radius-xl);
`;

const SearchIcon = styled(FiSearch)`
  font-size: 18px;
  color: var(--color-text-secondary);
`;

const SearchBar = styled.input`
    border: none;
    outline: none;
    background: transparent;
    margin-left: var(--space-sm);
    width: 400px;
    color: var(--color-text-primary);
    font-size: var(--text-md);

    &::placeholder {
        color: var(--color-text-secondary);
    }
`

export{
    SearchBar,
    SearchIcon,
    Wrapper
}