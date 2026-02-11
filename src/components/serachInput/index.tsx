import { SearchBar, Wrapper, SearchIcon } from './styled-components'

export function SearchInput() {


  return (
    <Wrapper>
        <SearchIcon/>
        <SearchBar
            type='text'
            placeholder='Buscar...'
        />
    </Wrapper>
  )
}