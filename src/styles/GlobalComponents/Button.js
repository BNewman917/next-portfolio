import React from "react";

import { ButtonBack, ButtonFront, PopUl, PopLi, Span } from "./index";

const Button = (props) => (
    <PopUl>
        <PopLi>
            <Span></Span>
            <Span></Span>
            <Span></Span>
            <Span></Span>
            <Span>
                <ButtonBack
                    alt={props.alt}
                    form={props.form}
                    disabled={props.disabled}
                >
                    {props.children}
                    <ButtonFront
                        alt={props.alt}
                        disabled={props.disabled}
                        style={{ opacity: "1 !important" }}
                        href="../constants/Brent_Newman_Resume.pdf"
                        download="Brent_Newman_Resume.pdf"
                    >
                        {props.children}
                    </ButtonFront>
                </ButtonBack>
            </Span>
        </PopLi>
    </PopUl>
);

export default Button;
