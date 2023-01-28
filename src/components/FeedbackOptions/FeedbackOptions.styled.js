import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    width: 100px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-transform: capitalize;
    border: 1px solid grey;
    border-radius: 4px; 
    background-color: #FFFFFF;
    transition: background-color 180ms ease, color 180ms ease, border-color 180ms ease;
    

    :not(:last-child){
        margin-right: 10px;
    }

    :hover {
        background-color: blue;
        color: white;
        border-color: blue; 
    }

`