import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImProfile } from "react-icons/im";

import { SocialIcons } from "../Header/HeaderStyles";
import {
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    ResumeIcon,
    SocialContainer,
    SocialIconsContainer,
} from "./FooterStyles";
import Form from "../Form/Form";

const Footer = () => {
    const { setShow } = useStateContext();

    const resumeClick = () => {
        setShow(true);
    };

    return (
        <FooterWrapper id="contact">
            <LinkList>
                {/* <LinkColumn>
                    <LinkTitle>Info:</LinkTitle>
                    <LinkItem>"------------------"</LinkItem>
                    <LinkTitle>Email:</LinkTitle>
                    <LinkItem href="mailto:brentnewman917@gmail.com">
                        brentnewman917@gmail.com
                    </LinkItem>
                    <LinkTitle>Info:</LinkTitle>
                    <LinkItem>"------------------"</LinkItem>
                </LinkColumn> */}
                <Form />
            </LinkList>
            <SocialIconsContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://linkedin.com">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <ResumeIcon onClick={resumeClick}>
                        <ImProfile size="2.7rem" />
                    </ResumeIcon>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
