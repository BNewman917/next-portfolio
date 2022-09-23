import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { TbArrowAutofitUp } from "react-icons/tb";

import {
    Container,
    Div1,
    Div2,
    NavLink,
    SocialIcons,
    TopButton,
} from "./HeaderStyles";
import { ResumeIcon } from "../Footer/FooterStyles";

const Header = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const { setShow } = useStateContext();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 90) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const resumeClick = () => {
        setShow(true);
    };

    return (
        <Container>
            <TopButton onClick={goToTop} className={showTopBtn ? "show" : null}>
                <TbArrowAutofitUp size={"30px"} />
            </TopButton>
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
