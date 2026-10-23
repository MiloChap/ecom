import { useState } from "react";
import styled from "styled-components";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 44px 8px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font: inherit;
  color: var(--text-h);
  background: var(--bg);

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  padding: 4px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--accent);
    border-radius: 4px;
  }
`;

const FieldError = styled.span`
  font-size: 14px;
  color: #e5484d;
`;

function FormField({ label, type = "text", register, error }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <Field>
      <label htmlFor={register.name}>{label}</label>
      <InputWrapper>
        <Input id={register.name} type={inputType} {...register} />
        {isPassword && (
          <EyeButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🐵" : "🙈"}
          </EyeButton>
        )}
      </InputWrapper>
      {error && <FieldError>{error.message}</FieldError>}
    </Field>
  );
}

export default FormField;
