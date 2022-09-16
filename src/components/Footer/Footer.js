import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFile } from "react-icons/ai";
import { ImProfile } from "react-icons/im";

import { SocialIcons } from "../Header/HeaderStyles";
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper id="contact">
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:405-823-0368">405-823-0368</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:brentnewman917@gmail.com">
                        brentnewman917@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://linkedin.com">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons
                        href="../../constants/Brent_Newman_Resume.pdf"
                        download
                    >
                        <ImProfile size="2.7rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
