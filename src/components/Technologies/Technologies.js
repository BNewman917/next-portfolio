import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    ImageContainer,
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./TechnologiesStyles";
import { technologies } from "../../constants/constants";

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I have worked with a range of technologies and frameworks,
            including:
        </SectionText>
        <ImageContainer>
            <List></List>
        </ImageContainer>
        <List>
            <ListItem>
                <DiReact size="5rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experience with: <br />
                        HTML <br /> CSS <br /> JavaScript <br /> React.js
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
