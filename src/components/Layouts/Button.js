import styled from 'styled-components';

export const But = styled.button`
    margin-top: 15px;
    color: white;
    font-size: 5rem;
    padding: 0.5em 1.2em;
    background: #385ca8;
    border: 2px solid;
    border-radius: 30px;
    border-color: #385ca8;
    position: relative;
    transition: 0.3s;
    display:inline-block;
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
    :hover{
        transform: translateY(0) scale(1.1);
        color: #385ca8 ;
        transition: 0.3s;
        background:#f2c105;
    }
`;
