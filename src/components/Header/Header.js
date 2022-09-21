import Link from "next/link";
import React from "react";
import { useStateContext } from "../../context/StateContext";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImProfile } from "react-icons/im";

import { Container, Div1, Div2, NavLink, SocialIcons } from "./HeaderStyles";
import { ResumeIcon } from "../Footer/FooterStyles";

const Header = () => {
    const { setShow } = useStateContext();

    const resumeClick = () => {
        setShow(true);
    };

    return (
        <Container>
            <Div1>
                <li>
                    <Link href="#projects">
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#tech">
                        <NavLink>Technologies</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <NavLink>Contact</NavLink>
                    </Link>
                </li>
            </Div1>
            <Div2>
                <SocialIcons
                    href="https://github.com/bnewman917"
                    target="_blank"
                >
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons
                    href="https://www.linkedin.com/in/brent-newman917"
                    target="_blank"
                >
                    <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <ResumeIcon onClick={resumeClick}>
                    <ImProfile size="2.7rem" />
                </ResumeIcon>
            </Div2>
        </Container>
    );
};

export default Header;
