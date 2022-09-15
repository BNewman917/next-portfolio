import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: auto;
`;

export const PinkGradient = styled.div`
    position: absolute;
    z-index: -10;
    width: 40%;
    height: 35%;
    top: 0px;
    opacity: 0.15;
    background: linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%);
    filter: blur(900px);
`;

export const WhiteGradient = styled.div`
    position: absolute;
    z-index: -9;
    width: 80%;
    height: 80%;
    border-radius: 9999px;
    bottom: 10rem;
    opacity: 0.05;
    background: rgba(255, 255, 255, 1);
    filter: blur(750px);
    transform: translateX(40%) translateY(-50%);
`;

export const BlueGradient = styled.div`
    position: absolute;
    z-index: -10;
    width: 50%;
    height: 50%;
    right: 15rem;
    opacity: 0.3;
    background: linear-gradient(
        180deg,
        rgba(188, 165, 255, 0) 0%,
        #214d76 100%
    );
    filter: blur(123px);
    transform: translateY(-9%);
    max-width: 500px;
`;
