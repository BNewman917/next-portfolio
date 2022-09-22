import styled from "styled-components";

export const FooterWrapper = styled.section`
    width: calc(100vw - 96px);
    max-width: 1040px;
    padding: 0 48px 0.5rem;
    margin: 8rem auto 0;
    box-sizing: content-box;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background: radial-gradient(
            30% 20% at 30% 100%,
            rgba(152, 66, 255, 0.25) 20%,
            rgba(148, 92, 215, 0.15) 42%,
            rgba(22, 25, 40, 0) 100%
        ),
        radial-gradient(
            50% 22% at 50% 100%,
            rgba(255, 255, 255, 0.22) 20%,
            rgba(255, 255, 255, 0.15) 42%,
            rgba(22, 25, 40, 0) 100%
        ),
        radial-gradient(
            30% 20% at 70% 100%,
            rgba(35, 173, 252, 0.25) 20%,
            rgba(56, 149, 203, 0.15) 42%,
            rgba(22, 25, 40, 0) 100%
        );

    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0 16px 0;
        width: calc(100vw - 32px);
    }
`;

export const LinkList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 40px;
    padding: 40px 0 28px;

    @media ${(props) => props.theme.breakpoints.lg} {
        padding: 32px 0 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        width: 100%;
        padding: 32px 0 16px;
        gap: 16px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        padding: 32px 4px 16px;
        gap: 5px;
        display: flex;
        justify-content: space-around;
    }
`;

export const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: 10%;

    @media ${(props) => props.theme.breakpoints.lg} {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin: 0;
    }
`;
export const LinkTitle = styled.h4`
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 16px;

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 10px;
        line-height: 12px;
        margin-bottom: 8px;
    }
`;

export const LinkItem = styled.a`
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 16px;
    transition: 0.3s ease;
    position: relative;
    left: 0;

    &:hover {
        color: #fff;
        left: 6px;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 16px;
        line-height: 28px;
        display: flex;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 11px;
        line-height: 14px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
    }
`;

export const SocialIconsContainer = styled.div`
    max-width: 1040px;
    display: flex;
    justify-content: center;

    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    gap: 2rem;
`;

export const Resume = styled.div`
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 99999;
    transition: all 1s ease-in-out;
`;

export const ResumeIcon = styled.div`
    transition: 0.3s ease;
    color: white;
    border-radius: 50px;
    padding: 8px;
    &:hover {
        background-color: #212d45;
        transform: scale(1.2);
        cursor: pointer;
    }
`;
