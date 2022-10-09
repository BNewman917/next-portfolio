import React from "react";
import { ResumeWrapper, ResumeModal, Download, Img } from "./ResumeStyles";
import { useStateContext } from "../../context/StateContext";
import { HiOutlineDownload } from "react-icons/hi";

const Resume = () => {
    const { show, setShow } = useStateContext();

    const wrapperClick = (e) => {
        if (e.currentTarget !== e.target) return;
        setShow(false);
    };

    return (
        <ResumeWrapper onClick={wrapperClick} className={show ? "show" : null}>
            <ResumeModal>
                <Download href="/assets/Brent_Newman_Resume.pdf" download>
                    <HiOutlineDownload size={"30px"} />
                </Download>
                <Img src="/images/resume.png" alt="resume" />
            </ResumeModal>
        </ResumeWrapper>
    );
};

export default Resume;
