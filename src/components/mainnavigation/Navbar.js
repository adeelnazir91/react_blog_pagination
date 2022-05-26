import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Nav } from '../styles/Header.styled';
 
export const List = styled.ul`
display: inline-block;
list-style: none;
margin: 0px;
padding: 0px;

`
export const ListItem = styled.li`
    display: table;
`


export const li = styled.li

const Navbar = () => {

    return (
        <Nav >
            <List>
              <ListItem>
                 <Link to="/">Launches</Link>
              </ListItem>
            </List>
        </Nav>

    )
}

export default Navbar;
