import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const NavBar = () => (
  <Menu>
    <Menu.Item header>Title</Menu.Item>
    <Menu.Item as={NavLink} to='/' exact name='Home' content='Home' />
    <Menu.Item as={NavLink} to='/about' name='About' content='About' />
  </Menu>
)

export default NavBar
