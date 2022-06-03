import React from 'react';
import styled from 'styled-components';
import myImage from '../../img/bal.png';

const Image = styled.img`
    margin-top: 3rem;
      width: 180px;
      height: 180px;
      -webkit-animation:spin 4s linear infinite;
      -moz-animation:spin 4s linear infinite;
      animation:spin 4s linear infinite;
      @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
      @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;


const Load = styled.p`
    font-size: 2rem;
    font-weight: 700;
    border-radius:5px;
    text-align: center;
`;
const Container = styled.div`
    margin-top: 2rem;
    position: absolute;
    left: 26%;
    @media (min-width: 768px) {
    left: 40%;
    }


`;
const Loading = () => {
    return (
        <Container>
            <Load >Loading...</Load>

            <Image src={`${myImage}`} alt="pokemon" />;

        </Container>
    );
}

export default Loading;
