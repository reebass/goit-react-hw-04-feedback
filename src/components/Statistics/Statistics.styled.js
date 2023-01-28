import styled from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding-left: 5px;
    list-style: none;
    text-transform: uppercase;

    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 7px;

    :not(:last-child) {
        margin-bottom: 5px;
    }
`

export const Value = styled.span`
    color: grey;
    font-size: 18px
`

export const Stats = styled.span`
    color: #292929;
`
