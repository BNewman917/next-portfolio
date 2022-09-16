import React from "react";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    ImageContainer,
    List,
    ListItem,
    ListParagraph,
    Icon,
} from "./TechnologiesStyles";
import { technologies } from "../../constants/constants";

const Technologies = ({}) => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle>Technologies | Skills</SectionTitle>
        <ImageContainer>
            <List>
                {technologies.map(({ icon, text }) => (
                    <ListItem key={text}>
                        <Icon>{icon}</Icon>
                        <ListParagraph>{text}</ListParagraph>
                    </ListItem>
                ))}
            </List>
        </ImageContainer>
    </Section>
);

export default Technologies;
