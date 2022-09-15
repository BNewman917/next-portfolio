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

export const TextGradient = styled.span`
    font-weight: 800;
    font-size: ${(props) => (props.main ? "65px" : "56px")};
    width: max-content;
    max-width: 100%;
    background: radial-gradient(50% 50% at 50% 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 42px;
        line-height: ${(props) => (props.main ? "56px" : "48px")};
        margin: 1rem 0;
        padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 28px;
        line-height: 40px;
        max-width: 100%;
    }
`;

export const SectionTitle = styled.h2`
    font-weight: 800;
    font-size: ${(props) => (props.main ? "65px" : "56px")};
    line-height: ${(props) => (props.main ? "72px" : "56px")};
    margin: 0 auto;
    width: max-content;
    max-width: 100%;
    background: linear-gradient(
        121.57deg,
        #ffffff 18.77%,
        rgba(255, 255, 255, 0.66) 60.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
    padding: ${(props) => (props.main ? "58px 0 16px" : "28px 0 16px")};

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: ${(props) => (props.main ? "56px" : "48px")};
        line-height: ${(props) => (props.main ? "56px" : "48px")};
        margin-bottom: 12px;
        padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 42px;
        line-height: ${(props) => (props.main ? "32px" : "40px")};
        padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
        max-width: 100%;
    }
`;

export const SectionText = styled.p`
    text-align: center;
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    margin: 0 auto;
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
