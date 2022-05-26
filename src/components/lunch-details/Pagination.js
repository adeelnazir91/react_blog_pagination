import React from 'react';
import styled from 'styled-components'

export const List = styled.ul`
list-style: none;
display: inline-block;
padding: 0px;
margin: 0px;
`
export const ListItem = styled.li`
display: inline-block;
border: 1px solid #b3c7cc;
`

export const ListLink = styled.a`
color: #000;
padding: 5px 10px;
display: inline-block;
`

export const Listalign = styled.div`
text-align: center;
padding: 10px 0px;
`

const Pagination = ({ itemPerPage, totalData, paginate, currentPage }) => {

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalData / itemPerPage); i++) {
        pageNumber.push(i);
    }


    return (
        <Listalign>
            <List>
                {pageNumber.map((number) => {
                    return (
                        <ListItem key={number}>
                            <ListLink className={`${currentPage === number ? "active" : ""}`} href="#" onClick={() => paginate(number)}>
                                {number}
                            </ListLink>
                        </ListItem>
                    )
                })}

            </List>
        </Listalign>
    )
}

export default Pagination
