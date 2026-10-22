import styled from "styled-components";

const Button = styled.button`
  padding: 8px 16px;
  border: 2px solid transparent;
  border-radius: 6px;
  font: inherit;
  font-size: 16px;
  color: var(--accent);
  background: var(--accent-bg);
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: var(--accent-border);
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
