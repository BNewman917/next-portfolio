import styled from "styled-components";

export const ResumeWrapper = styled.section`
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.5s linear, opacity 0.5s linear;
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);

    &.show {
        visibility: visible;
        opacity: 1;
        transition: visibility 0.5s linear, opacity 0.5s linear;
    }
`;

export const ResumeModal = styled.div`
    position: fixed;
    z-index: 200;
    top: 5%;
    max-width: 1024px;
    max-height: 98%;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color: #bbbfca #e8e8e8;
    scrollbar-width: thin;
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: #e8e8e8;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #bbbfca;
        border-radius: 20px;
        border: 3px solid #e8e8e8;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
        top: 0;
        left: 0;
    }
`;

export const Download = styled.a`
    position: fixed;
    padding: 1rem;
    font-size: 2rem;
    color: #000;
    transition: 0.4s ease;
    &:hover {
        color: #000;
        opacity: 1;
        cursor: pointer;
        transform: scale(1.2) translateY(5px) translateX(5px);
    }
`;

export const Exit = styled.span`
    display: none;
    position: fixed;
    top: 1rem;
    right: 2rem;
    padding: 1rem;
    font-size: 2rem;
    color: #000;
    transition: 0.4s ease;
    &:hover {
        color: #000;
        opacity: 1;
        cursor: pointer;
        transform: scale(1.2) translateY(5px) translateX(5px);
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        padding: 0;
        display: block;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 1rem;
`;
