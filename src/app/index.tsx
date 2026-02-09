import { Container, Sidebar, ContentBody } from './styled-component'; 

import { HeaderSidebar } from '../components/headerSidebar';
import { HeadeContent } from '../components/headerContent';
import { ConentSidebar } from '../components/contentSidebar'

export function App() {

  return (
   <Container>
    <Sidebar>
      <HeaderSidebar/>
      <ConentSidebar/>
    </Sidebar>

    <ContentBody>
       <HeadeContent/>
       
    </ContentBody>
   </Container>  
  )
}