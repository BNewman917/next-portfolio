import styled from "styled-components";

export const LeftSection = styled.div`
    width: 100%;
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 80%;
        display: flex;
        flex-direction: column;

        margin: 0 auto;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        width: 100%;
        display: flex;
        flex-direction: column;

        margin: 0 auto;
    }
`;

export const JobTitle = styled.span`
    font-weight: 800;
    font-size: 36px;
    width: max-content;
    max-width: 100%;
    margin: 3rem auto;
    background: rgba(225, 226, 227, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 42px;
        line-height: 48px;
        margin: 1rem 0;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 28px;
        line-height: 40px;
        max-width: 100%;
    }
`;

export const SectionTitle = styled.h2`
    font-weight: 900;
    font-size: 78px;
    font-family: "Titillium Web", monospace;
    line-height: 56px;
    margin: 0 auto 3rem;
    background: #e1e2e3;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 42px 0 16px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 48px;
        line-height: 48px;
        margin-bottom: 12px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 42px;
        line-height: 32px;
        max-width: 100%;
    }
`;

export const SectionText = styled.p`
    text-align: center;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    margin: 2rem auto 0;
    padding-bottom: 2rem;
    color: rgba(255, 255, 255, 0.5);

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
