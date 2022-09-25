import React from "react";

import { Section } from "../../styles/GlobalComponents";
import { SectionTitle, JobTitle, SectionText } from "./HeroStyles";
import AvatarCard from "../AvatarCard/AvatarCard";

const Hero = () => (
    <Section column>
        <SectionTitle>Brent Newman</SectionTitle>
        <AvatarCard />
        <JobTitle>Web Developer</JobTitle>
        <SectionText>
            I'm a web developer with a focus on the MERN stack but still
            exploring other technologies and frameworks that catch my interest!
            I am always looking for new opportunities to grow. If you're looking
            for a developer to add to your team, I'd love to hear from you!
        </SectionText>
    </Section>
);

export default Hero;
