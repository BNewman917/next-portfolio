import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    padding: 1rem 2rem;
    width: 100%;
    max-width: 768px;
    background-color: #161928;
    flex-direction: column;
    border-radius: 2rem;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const ContactTitle = styled.h1`
    font-size: 1.5rem;
    line-height: 1rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
`;

export const ContactLabel = styled.label`
    color: #e1e2e3;
    font-weight: 300;
`;

export const ContactInput = styled.input`
    height: 30px;
    width: 77%;
    max-width: 500px;
    padding: 0.5rem 1rem;
    background-color: #e1e2e3;
    color: #495464;
    font-weight: 300;
    border-bottom-width: 1px;
    --ring-color: #10b981;
`;

export const ContactTextArea = styled.textarea`
    height: 85px;
    width: 77%;
    max-width: 500px;
    padding: 0.5rem 1rem;
    background-color: #e1e2e3;
    color: #495464;
    font-weight: 300;
    border-bottom-width: 1px;
    --ring-color: #10b981;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ContactButton = styled.button`
    display: flex;
    padding: 0.7rem 2rem;
    color: #e1e2e3;
    font-size: 18px;
    line-height: 1.75rem;
    font-weight: 400;
    flex-direction: row;
    align-items: center;
    border-radius: 1rem;
    background: #6b3030;
    cursor: pointer;

    &:hover {
        transform: translateY(-3px) scale(1.1);
        transition: all 0.2s ease-in-out;
    }
`;
