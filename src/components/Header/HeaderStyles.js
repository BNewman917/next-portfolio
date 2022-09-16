import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    padding: 2rem 1rem;

    @media ${(props) => props.theme.breakpoints.lg} {
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 1rem;
        padding: 1rem 0.5rem;
    }
    @media ${(props) => props.theme.breakpoints.xs} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-right: 8rem;
    @media ${(props) => props.theme.breakpoints.lg} {
        grid-area: 1 / 1 / 2 / 3;
        padding-right: 0rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        justify-content: space-around;
        grid-area: 1 / 1 / 2 / 3;
    }
    @media ${(props) => props.theme.breakpoints.xs} {
        grid-area: 1 / 1 / 2 / 2;
    }
`;
export const Div2 = styled.div`
    grid-area: 1 / 4 / 2 / 5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.lg} {
        grid-area: 1 / 4 / 2 / 5;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        grid-area: 1 / 4 / 2 / 5;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        align-items: center;
        grid-area: 1 / 3 / 2 / 4;
    }
    @media ${(props) => props.theme.breakpoints.xs} {
        display: none;
    }
`;

export const NavLink = styled.a`
    font-size: 2rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;

export const SocialIcons = styled.a`
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
