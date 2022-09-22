import React from "react";

import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
    {
        number: "4.0 GPA",
        text: "MIT xPRO Full Stack Coding Bootcamp",
    },
];

const Acomplishments = () => (
    <Section>
        <SectionDivider />
        <SectionTitle>Acomplishments</SectionTitle>
        <Boxes>
            {data.map((card, i) => (
                <Box key={i}>
                    <BoxNum>{card.number}</BoxNum>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
);

export default Acomplishments;
