import styled from "styled-components";

export const ProgressBar = styled.ul`
    counter-reset: step;
    margin-top: 2rem;
    padding: 0;
    width: 100%;
    counter-increment: step 2014;
`;

export const ProgressBarItem = styled.li`
    list-style-type: none;
    display: inline-block;
    width: 33.33%;
    position: relative;
    text-align: center;
    letter-spacing: 2px;
    &:before {
        content: counter(step);
        counter-increment: step;
        width: 50px;
        height: 50px;
        line-height: 50px;
        border: 3px solid #ecf0f1;
        display: block;
        text-align: center;
        margin: 0 auto 10px auto;
        border-radius: 50%;
        background-color: $background;
        letter-spacing: 0px;
    }
    &:after {
        content: "";
        position: absolute;
        width: 84%;
        height: 3px;
        background-color: #ecf0f1;
        top: 25px;
        left: -42%;
        z-index: -1;
    }
    &:first-child:after {
        content: none;
    }
    &.active {
        color: #f1c40f;
        &:before {
            border-color: #f1c40f;
        }
    }
    &.active + li:after {
        background-color: #f1c40f;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        &:after {
            left: -20%;
            width: 40%;
        }
    }
`;
