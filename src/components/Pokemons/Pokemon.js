import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import myImage from '../../img/pok.png';
import Loading from '../Layouts/Loading';

const Box = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;

`;
const Card = styled.div`
    box-shadow: 2px 2px 10px #666;
    padding: 1rem;
    background-color: #4B4453;
    border-radius: 10px;
    :hover{
        transform: translateY(0) scale(1.07);
    }
`;

const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 200px;
`;
const Image2 = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 200px;
    height: 100px;
`;


const Text = styled.p`
    display: block;
    color: white;
    font-size: 1.5rem;
    margin: 1rem 0;
    text-align: center;
    text-decoration: underline #4B4453 ;
`;
const Span = styled.span`
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
`;

const Type = styled.p`
    background-color: #C197FF;
    border-radius: 5px;
    font-size: 1.5rem;
    text-decoration: underline #C197FF;
    color: black;
    margin: 0 2rem;
    padding: 1rem 1.5rem;
    :hover{
        background-color: #95E06C;
        text-decoration: underline #95E06C;
    }
`;

const Pokemon = ({ pokemon }) => {
    const { name, type, id, img } = pokemon;

    
    return (
        <div>
            <Link to={`/pokemon/${id}`}>
                <Card>
                    <Text># {id}</Text>
                    <Text>< Span>{name}</ Span></Text>
                    {img ? <Image src={img} alt="pokemon character" /> :
                        <Image2 src={myImage} alt="pokemon character" />
                    }
                    <Box>
                        <Type >{type[0]}</Type >
                        {
                            type[1] ? <Type >{type[1]}</Type >
                                : null
                        }

                    </Box>
                </Card>
            </Link>
        </div>

    )
}
export default Pokemon;






