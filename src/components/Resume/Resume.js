import React from "react";
import { ResumeWrapper, ResumeModal } from "./ResumeStyles";
import { useStateContext } from "../../context/StateContext";

const Resume = () => {
    const { setShow } = useStateContext();

    const wrapperClick = (e) => {
        if (e.currentTarget !== e.target) return;
        setShow(false);
    };

    return (
        <ResumeWrapper onClick={wrapperClick}>
            <ResumeModal>
                <img width={"640px"} src="/images/resume.png" alt="resume" />
            </ResumeModal>
        </ResumeWrapper>
    );
};

export default Resume;
