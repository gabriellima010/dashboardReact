import { FiHome, FiShoppingBag  , FiSettings } from 'react-icons/fi';
import { Content, ListContent, ListItem, IconList, StyledLink } from './styled-components'

export function ConentSidebar() {
  const list = [ 
    {label: 'Dashboard', path: '/', icon: <FiHome/>},
    {label: 'Products', path: '/products', icon: <FiShoppingBag  />},
    {label: 'Settings', path: '/settings', icon: <FiSettings/>},
  ]

  return (
    <Content>
       <ListContent>
        {list.map((item, index) => (
          <ListItem key={index}>
            <StyledLink to={item.path}>
              <IconList>
                {item.icon}
              </IconList>
              {item.label}
            </StyledLink>
          </ListItem>
        ))}
       </ListContent>
    </Content>
  )
}