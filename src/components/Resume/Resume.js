import React from "react";
import { ResumeWrapper, ResumeModal, Download } from "./ResumeStyles";
import { useStateContext } from "../../context/StateContext";
import { HiOutlineDownload } from "react-icons/hi";

const Resume = () => {
    const { setShow } = useStateContext();

    const wrapperClick = (e) => {
        if (e.currentTarget !== e.target) return;
        setShow(false);
    };

    return (
        <ResumeWrapper onClick={wrapperClick}>
            <ResumeModal>
                <Download href="/assets/Brent_Newman_Resume.pdf" download>
                    <HiOutlineDownload />
                </Download>
                <img width={"640px"} src="/images/resume.png" alt="resume" />
            </ResumeModal>
        </ResumeWrapper>
    );
};

export default Resume;
