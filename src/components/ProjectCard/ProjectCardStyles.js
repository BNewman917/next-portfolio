import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 1.5rem 0 3.5rem;
    gap: 6rem;
    margin: 2rem 0;
    background: transparent;

    @media ${(props) => props.theme.breakpoints.md} {
        padding: 0 1.5rem;
    }
    @media ${(props) => props.theme.breakpoints.xs} {
        padding: 0 1rem;
    }
`;

export const BlogPost = styled.div`
    width: 100%;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    background-color: #161928;
    fit-content: flex-start;
    @media ${(props) => props.theme.breakpoints.md} {
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
    }
`;

export const BlogImg = styled.div`
    min-width: 300px;
    max-width: 300px;
    height: 200px;
    transform: translateX(-8rem);
    position: relative;
    @media ${(props) => props.theme.breakpoints.md} {
        transform: translateX(0);
        width: 50%;
        height: 50%;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
    display: block;
    border-radius: 1rem;
    @media ${(props) => props.theme.breakpoints.md} {
        border-radius: 0.5rem;
        width: 60%;
        height: 60%;
        margin: 0 auto;
    }
`;

export const BlogTitle = styled.h1`
    font-size: 2.5rem;
    margin-top: 1.5rem 0 2rem;
    text-transform: uppercase;
    color: #e4e6e7;
    background: linear-gradient(
        121.57deg,
        #ffffff 18.77%,
        rgba(255, 255, 255, 0.66) 60.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        justify-content: center;
    }
`;

export const BlogText = styled.p`
    font-size: 1.4rem;
    color: rgba(228, 230, 231, 0.8);
    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        justify-content: center;
        text-align: center;
    }
`;

export const UtilityList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: start;
    gap: 2rem;
    @media ${(props) => props.theme.breakpoints.md} {
        justify-content: center;
    }
`;

export const UtilityWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
`;

export const ExternalLinks = styled.a`
    color: #d4c0c0;
    max-height: 36px;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    background: #6b3030;
    border-radius: 15px;
    transition: 0.5s;
    &:hover {
        background: #801414;
    }
`;

export const TagList = styled.ul`
    display: flex;
    justify-content: space-around;
    padding: 2rem 2rem 2rem 0;
    gap: 2rem;
    @media ${(props) => props.theme.breakpoints.md} {
        justify-content: center;
        flex-wrap: wrap;
    }
`;
export const Tag = styled.li`
    color: #d8bfbf;
    font-size: 1.5rem;
`;
