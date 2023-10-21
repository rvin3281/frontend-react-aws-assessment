import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  padding: 1rem;

  .register-member {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    font-size: 14px;
  }
  .login-member {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    .login-member {
      flex-direction: row;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 1rem;
`;

export const SubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;
