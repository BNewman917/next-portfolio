import styled from "styled-components";

export const ResumeWrapper = styled.section`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    transition: all 1s ease-in-out;
`;

export const ResumeModal = styled.div`
    position: fixed;
    margin: 0 auto;
    opacity: 1;
    transition: opacity 200ms ease-out;
    z-index: 200;
    max-width: 800px;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color: #bbbfca;
    scrollbar-width: thin;
`;
