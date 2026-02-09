import { Logo, Title, Header } from './styled-components'

import LogoImg from '../../assets/react.svg';


export function HeaderSidebar() {

  return (
  <Header>
    <Logo src={LogoImg}/>
    <Title> Dashboard</Title>
  </Header>
  )
}