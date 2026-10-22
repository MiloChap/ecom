import styled from "styled-components";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  text-align: left;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: var(--shadow);
  }
`;

export default Card;
