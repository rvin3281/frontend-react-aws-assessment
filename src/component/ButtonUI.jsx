import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? "var(--green-light)" : "blue"};
  padding: 0.5rem 2rem;
  border: 0;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.2rem;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;

  transition: 0.2s ease-in-out all;

  &:hover {
    background-color: var(--green-light-hover);
  }
`;

// const ButtonUI = ({ children }) => {
//   return <Button>{children}</Button>;
// };
// export default ButtonUI;
