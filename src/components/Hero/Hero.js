import React from "react";

import { Section } from "../../styles/GlobalComponents";
import { SectionTitle, TextGradient, SectionText } from "./HeroStyles";
import AvatarCard from "../AvatarCard/AvatarCard";

const Hero = () => (
    <Section column nopadding>
        <SectionTitle>Brent Newman</SectionTitle>
        <AvatarCard />
        <TextGradient>Web Developer</TextGradient>
        <SectionText>
            I'm a full-stack web developer with a passion for being at work on
            time and feeding my family.
        </SectionText>
    </Section>
);

export default Hero;
