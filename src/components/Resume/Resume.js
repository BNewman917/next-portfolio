import React from "react";
import {
    ResumeWrapper,
    ResumeModal,
    Download,
    Img,
    Exit,
} from "./ResumeStyles";
import { useStateContext } from "../../context/StateContext";
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Resume = () => {
    const { show, setShow } = useStateContext();

    const wrapperClick = (e) => {
        if (e.currentTarget !== e.target) return;
        setShow(false);
    };

    const exitClick = (e) => {
        setShow(false);
    };

    return (
        <ResumeWrapper onClick={wrapperClick} className={show ? "show" : null}>
            <ResumeModal>
                <Download href="/assets/Brent_Newman_Resume.pdf" download>
                    <HiOutlineDownload size={"30px"} />
                </Download>
                <Exit onMouseDown={exitClick}>
                    <AiOutlineClose size={"30px"} />
                </Exit>
                <Img src="/images/resume.png" alt="resume" />
            </ResumeModal>
        </ResumeWrapper>
    );
};

export default Resume;
