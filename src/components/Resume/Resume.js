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

    const handleClick = (e) => {
        if (e.currentTarget !== e.target) return;
        e.preventDefault();
        setShow(false);
    };

    return (
        <ResumeWrapper onClick={handleClick}>
            <ResumeModal>
                <Download href="/assets/Brent_Newman_Resume.pdf" download>
                    <HiOutlineDownload size={"30px"} />
                </Download>
                <Exit onClick={handleClick}>
                    <AiOutlineClose size={"30px"} />
                </Exit>
                <Img src="/images/resume.png" alt="resume" />
            </ResumeModal>
        </ResumeWrapper>
    );
};

export default Resume;
