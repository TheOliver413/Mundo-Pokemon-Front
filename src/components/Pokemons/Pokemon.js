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
    transition: 0.3s;
    :hover{
        transition: 0.3s;
        -moz-transform: scale(1.3) translate(0px, -10px);
        -webkit-transform: scale(1.3) translate(0px, -10px);
        -o-transform: scale(1.3) translate(0px, -10px);
        -ms-transform: scale(1.3) translate(0px, -10px);
        transform: scale(1.3) translate(0px, -10px);
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
    :hover{
        color: #385ca8 ;
        box-shadow: 0 4px 16px rgb(56, 92, 168,1);
        transition: 0.3s;
        background:#f2c105;
    }
`;

const Pokemon = ({ pokemon }) => {
    const { name, type, id, img } = pokemon;

    
    return (
        <div>
            <Link to={`/pokemon/${id}`} style={{ textDecoration: 'none' }}>
                <Card>
                    <Text># {id}</Text>
                    <Text>< Span>{name}</ Span></Text>
                    {img ? <Image src={img} alt="personaje pokémon" /> :
                        <Image2 src={myImage} alt="personaje pokémon" />
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






