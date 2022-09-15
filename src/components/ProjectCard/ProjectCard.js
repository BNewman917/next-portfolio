import React from "react";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    Container,
    BlogPost,
    Img,
    BlogImg,
    UtilityList,
    ExternalLinks,
    TagList,
    Tag,
    BlogTitle,
    UtilityWrap,
    BlogText,
} from "./ProjectCardStyles";
import { projects } from "../../constants/constants";

const ProjectCard = () => (
    <Section id="projects" style={{ overflow: "visible" }}>
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <Container>
            {projects.map(
                ({ id, image, title, description, tags, source, visit }) => (
                    <BlogPost key={id}>
                        <BlogImg>
                            <Img src={image} />
                        </BlogImg>
                        <div style={{ marginBottom: "1rem" }}>
                            <BlogTitle>{title}</BlogTitle>
                            <BlogText>{description}</BlogText>
                            <UtilityList>
                                <TagList>
                                    {tags.map((tag, index) => (
                                        <Tag key={index}>{tag}</Tag>
                                    ))}
                                </TagList>
                            </UtilityList>
                            <UtilityList>
                                <UtilityWrap>
                                    <ExternalLinks href={visit} target="_blank">
                                        Code
                                    </ExternalLinks>
                                    <ExternalLinks
                                        href={source}
                                        target="_blank"
                                    >
                                        Demo
                                    </ExternalLinks>
                                </UtilityWrap>
                            </UtilityList>
                        </div>
                    </BlogPost>
                )
            )}
        </Container>
    </Section>
);

export default ProjectCard;
