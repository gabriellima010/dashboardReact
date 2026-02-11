import { Header, Wrapper, IconUser, IconArrow } from './styled-components'

import { SearchInput } from '../serachInput'

export function HeadeContent() {

  return (
  <Header>
    <SearchInput/>
    <Wrapper>
      <IconUser/>
      <IconArrow/>
    </Wrapper>
  </Header>
  )
}