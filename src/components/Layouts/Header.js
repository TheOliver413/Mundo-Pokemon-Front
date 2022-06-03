import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.div`
background: #385ca8;
padding: 1rem;
max-width: 100%;
display: flex;
justify-content: center;
margin-bottom: 0;
`;

const Text = styled.p`
margin-top: 5px;
color: white;
font-size: 20px;
padding: 0.5em 1.2em;
background: #385ca8;
border: 2px solid;
border-radius: 30px;
border-color: #385ca8;
position: relative;
transition: 0.3s;
display:inline-block;
    

    :hover{
      transform: translateY(0) scale(1.1);
      background-color: #071737;
    }
`;

const Header = () => {
  return (

    <Head>
      <Link to={'/pokemon'} >
        <Text>Pokemon App</Text>
      </Link>
    </Head>
  );
}

export default Header;