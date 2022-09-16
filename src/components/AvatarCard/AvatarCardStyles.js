import styled from "styled-components";

export const Wrapper = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 2rem 0 1rem;
    }
`;

export const Shadow = styled.div`
    height: 304px;
    width: 302px;
    border-radius: 100%;
    background-color: #7d6cd4;
    opacity: 0.5;
    filter: blur(7px);
    opacity: 0.5;
    position: absolute;
    z-index: -1;
    top: 7px;
    animation: 10s ease-in-out infinite alternate glow;
    @keyframes glow {
        0%,
        100% {
            transform: scale(1);
        }
        40% {
            transform: scale(1.02);
        }
        60% {
            transform: scale(1.01);
        }
        80% {
            transform: scale(1.015);
        }
    }
    @media ${(props) => props.theme.breakpoints.md} {
        height: 250px;
        width: 250px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        height: 225px;
        width: 225px;
    }
`;

export const Background = styled.div`
    height: 300px;
    width: 300px;
    border-radius: 100%;
    background: radial-gradient(
        circle at 50% 50%,
        #12afc8 0%,
        #667ad1 42%,
        #7d6cd4 60%
    );
    border: 3px solid #e1e2e3;
    overflow: hidden;
    animation: 10s ease-in-out infinite alternate bounce;
    @keyframes bounce {
        0%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-10px);
        }
        80% {
            transform: translateY(-15px);
        }
    }
    @media ${(props) => props.theme.breakpoints.md} {
        height: 250px;
        width: 250px;
        border: 2px solid #e1e2e3;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        height: 225px;
        width: 225px;
    }
`;
