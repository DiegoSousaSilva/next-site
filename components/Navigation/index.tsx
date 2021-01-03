import { useRouter } from 'next/router'
//import Link from 'next/link'
import { ReactNode } from 'react'
import { List, Nav } from './styles'

const LINK =[
  {
    name: "Home",
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
]

type NavAnchor ={
  path: string
  children: ReactNode
}

function NavAnchor ({ path, children }: NavAnchor){
  return (
      <Nav href={path}>{children}</Nav>
  )
}

const Navigation: React.FC = () => {
  const {pathname} = useRouter()
  return (
      <nav>
        <List>
          {
            LINK.map(({name, path})=>(
            <li key={path}>
              {path == pathname 
              ? <span>{name}</span>
              : <NavAnchor path={path}>{name}</NavAnchor>
              }
            </li>
            ))
          }
        </List>
      </nav>
  );
};

export default Navigation;
