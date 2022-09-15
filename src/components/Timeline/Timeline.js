import React from "react";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { ProgressBar, ProgressBarItem } from "./TimelineStyles";
import { timeline } from "../../constants/constants";

const Timeline = () => (
    <Section>
        <SectionTitle>Timeline</SectionTitle>
        <ProgressBar>
            {timeline.map(({ year, title, active }) => (
                <ProgressBarItem key={year} className={active ? "active" : ""}>
                    {title}
                </ProgressBarItem>
            ))}
        </ProgressBar>
    </Section>
);

export default Timeline;
