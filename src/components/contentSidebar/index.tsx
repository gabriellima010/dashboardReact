import { FiHome, FiShoppingBag  , FiSettings } from 'react-icons/fi';

import { Content, ListContent, ListItem, IconList } from './styled-components'

export function ConentSidebar() {
  const list = [ 
    {label: 'Dashboard', icon: <FiHome/>},
    {label: 'Products', icon: <FiShoppingBag  />},
    {label: 'Settings', icon: <FiSettings/>},
  ]

  return (
    <Content>
       <ListContent>
        {list.map((item, index) => (
          <ListItem key={index}>
            <IconList>
              {item.icon}
            </IconList>
            {item.label}
          </ListItem>
        ))}
       </ListContent>
    </Content>
  )
}