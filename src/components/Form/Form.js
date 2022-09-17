import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    ButtonWrapper,
    ContactButton,
    ContactLabel,
    ContactInput,
    ContactTextArea,
    ContactTitle,
    FormContainer,
    InputWrapper,
} from "./FormStyles";
import { Section } from "../../styles/GlobalComponents";

const Form = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        const data = {
            fullName,
            email,
            message,
        };

        fetch("/api/form", {
            method: "POST",
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.status === 200) {
                alert("Message sent.");
                setFullName("");
                setEmail("");
                setMessage("");
            } else {
                alert("Message failed to send.");
            }
        });

        console.log(data);
    };
    console.log(errors);

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <ContactTitle>Send a message</ContactTitle>
            <InputWrapper>
                <ContactLabel htmlFor="fullname">Full name:</ContactLabel>
                <ContactInput
                    type="text"
                    name="fullname"
                    value={fullName}
                    placeholder="Full Name"
                    {...register("Full Name", {
                        required: true,
                        maxLength: 80,
                        onChange: (e) => setFullName(e.target.value),
                    })}
                />
            </InputWrapper>

            <InputWrapper>
                <ContactLabel htmlFor="email">E-mail:</ContactLabel>
                <ContactInput
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    {...register("Email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                        onChange: (e) => setEmail(e.target.value),
                    })}
                />
            </InputWrapper>
            <InputWrapper>
                <ContactLabel htmlFor="message">Message:</ContactLabel>
                <ContactTextArea
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Message..."
                    {...register("Message", {
                        required: true,
                        onChange: (e) => setMessage(e.target.value),
                    })}
                ></ContactTextArea>
            </InputWrapper>
            <ButtonWrapper>
                <ContactButton type="submit">Send</ContactButton>
            </ButtonWrapper>
        </FormContainer>
    );
};

export default Form;
