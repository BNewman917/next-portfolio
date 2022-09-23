import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    color: #fff;
`;

export const AboutText = styled.p`
    color: #e1e2e3;
    text-align: center;
    font-size: 18px;
    line-height: 36px;
    font-weight: 100;
    margin: 2rem auto 0;
    padding-bottom: 2rem;

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 670px;
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 24px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
    }
`;
