import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: static;
    padding: .5rem;
    border-radius: 8px;
`;

const Link = styled.a`
    background-color: #C197FF;
    font-size: 2rem;
    border: 1px solid #000000;
    border-radius: 5px;
    margin: .5rem;
    padding: .5rem 1rem; 
    text-decoration: none;

`;

const Pages = styled.p`
    background-color: #845EC2;
    font-size: 2rem;
    opacity: 0.6;
    border: 1px solid #000000;
    border-radius: 5px;
    margin: .5rem;
    padding: .5rem 1rem;
    :hover{
      background-color: #00C9A7;
    }

`;

const Pagination = ({ pokemonsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(40 / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (

    <Nav >

      {pageNumbers.map(number => (
        <Pages key={number} >

          <Link onClick={() => paginate(number)} href='#!'>
            {number}
          </Link>

        </Pages>
      ))}

    </Nav >
  );
};

export default Pagination;