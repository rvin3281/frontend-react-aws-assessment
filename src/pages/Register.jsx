// import { DevTool } from "@hookform/devtools";
import { useCustomForm } from "../hooks/useCustomForm";
import { registerSchema } from "../utils/formSchema";

import { toast } from "react-toastify";
// import ButtonUI from "../component/ButtonUI";
import { Button } from "../component/ButtonUI";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  FormContainer,
  Title,
  FormGroup,
  SubmitBtn,
} from "../component/RegLoginForm";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import baseUrl from "../utils/baseURL";

const Register = () => {
  const { formState, register, handleSubmit, reset } =
    useCustomForm(registerSchema);
  const { errors, isValid } = formState;

  const navigate = useNavigate();
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: async (data) => {
      return await baseUrl.post("/admin/register", data);
    },
    onSuccess: () => {
      toast.success("Thanks for Register");
      reset();
      navigate("/");
    },
  });

  const onSubmit = (data) => {
    signUp(data);
  };

  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            <h2>Register</h2>
          </Title>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormGroup className="form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-input"
                type="text"
                name="name"
                id="name"
                {...register("name")}
              />
              <p className="form-error">{errors.name?.message}</p>
            </FormGroup>
            <FormGroup className="form-group">
              <label className="form-label" htmlFor="name">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                name="email"
                id="email"
                {...register("email")}
              />
              <p className="form-error">{errors.email?.message}</p>
            </FormGroup>
            <FormGroup className="form-group">
              <label className="form-label" htmlFor="name">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                name="password"
                id="password"
                {...register("password")}
              />
              <p className="form-error">{errors.password?.message}</p>
            </FormGroup>

            <SubmitBtn>
              <Button disabled={!isValid} variant="primary">
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </SubmitBtn>
            <div className="register-member">
              <p>
                Aleady a member?
                <Link to="/"> Login</Link>
              </p>
            </div>
          </form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};
export default Register;
