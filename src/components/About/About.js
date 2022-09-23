import React from "react";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { AboutText, AboutContainer } from "./AboutStyles";

const About = () => {
    return (
        <Section>
            <SectionDivider />
            <SectionTitle>About Me</SectionTitle>
            <AboutContainer>
                <AboutText>
                    I have had a passion for computers and video games for as
                    long as I can remember. From breaking down and modding old
                    gaming consoles with friends to upgrading and modifying the
                    family PC to more efficiently run Everquest on dial-up, I
                    have always been curious and eager to learn.
                    <br />
                    <br />
                    Rather than pursue those interests earlier in life, I spent
                    nearly a decade in the service industry as a server, a
                    bartender, a manager, and a trainer. It taught me a great
                    deal about customer service and how to work with a team.
                    From there, I sought a more lucrative career as a table
                    games dealer. For the next five years I worked in casinos
                    where I gained a great deal of experience in the casino
                    industry and dealing with difficult people. I also learned a
                    great deal about myself and that I wanted more out of life.
                    <br />
                    <br /> I chose to pursue a career in web development because
                    I wanted to be able to work with a team motivated,
                    intelligent people who were passionate about what they do. I
                    have always been a creative person with a drive to build
                    things and solve problems.
                </AboutText>{" "}
            </AboutContainer>
        </Section>
    );
};

export default About;
