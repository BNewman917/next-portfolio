import styled from "styled-components";

export const ImageContainer = styled.div`
    text-align: center;
    background-image: radial-gradient(
            37% 22% at 30% 50%,
            rgba(152, 66, 255, 0.25) 20%,
            rgba(148, 92, 215, 0.15) 42%,
            rgba(22, 25, 40, 0) 100%
        ),
        radial-gradient(
            50% 22% at 50% 50%,
            rgba(255, 255, 255, 0.22) 20%,
            rgba(255, 255, 255, 0.15) 42%,
            rgba(22, 25, 40, 0) 100%
        ),
        radial-gradient(
            37% 22% at 70% 50%,
            rgba(35, 173, 252, 0.25) 20%,
            rgba(56, 149, 203, 0.15) 42%,
            rgba(22, 25, 40, 0) 100%
        );
    width: 100%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: visible;

    @media ${(props) => props.theme.breakpoints.lg} {
        background-image: none;
        padding: 0;
        margin-top: 40px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        background-image: none;
        padding: 0;
        margin-top: 16px;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    gap: 40px;
    margin: 3rem 0;
    display: flex;
    flex-direction: row;

    @media ${(props) => props.theme.breakpoints.lg} {
        margin: 64px 0;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        margin: 64px 0;
        gap: 24px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 32px 0;
    }
`;

export const ListItem = styled.li`
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        transform: translateY(-5px) scale(1.1);
        transition: all 0.2s ease-in-out;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 203px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin-bottom: 14px;
        max-width: 320px;
        flex-direction: row;
    }
`;

export const Icon = styled.a`
    height: 36px;
    width: 36px;
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        margin-left: 18px;
    }
`;

export const ListTitle = styled.h4`
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-bottom: 8px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 24px;
        line-height: 28px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.02em;
        margin-bottom: 4px;
    }
`;

export const ListParagraph = styled.p`
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.75);

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 16px;
        line-height: 28px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 14px;
        line-height: 22px;
    }
`;

export const ListIcon = styled.img`
    display: block;
    width: 48px;
    height: 48px;
    margin-bottom: 10px;

    @media ${(props) => props.theme.breakpoints.md} {
        width: 40px;
        height: 40px;
        margin-bottom: 8px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 32px;
        height: 32px;
        margin-bottom: 0px;
    }
`;
