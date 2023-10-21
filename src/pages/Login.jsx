// import { DevTool } from "@hookform/devtools";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  FormContainer,
  Title,
  FormGroup,
  SubmitBtn,
} from "../component/RegLoginForm";
import { Button } from "../component/ButtonUI";
import { useCustomForm } from "../hooks/useCustomForm";
import { loginSchema } from "../utils/formSchema";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import baseUrl from "../utils/baseURL";

const Login = () => {
  const { formState, register, handleSubmit, reset } =
    useCustomForm(loginSchema);
  const { errors, isValid } = formState;

  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: async (data) => {
      return await baseUrl.post("/admin/login", data);
    },
    onSuccess: () => {
      toast.success("Welcome to MyDashboard");
      reset();
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed! Please Try Again");
    },
  });

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            <h2>Login</h2>
          </Title>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
              <p className="form-error">{errors?.email?.message}</p>
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
              <p className="form-error">{errors?.password?.message}</p>
            </FormGroup>

            <SubmitBtn>
              <Button disabled={!isValid} variant="primary">
                Login
              </Button>
            </SubmitBtn>
            <div className="login-member">
              <p>Not a member yet? </p>
              <p>
                <span> Click here to</span>
                <Link to="register"> Register</Link>
              </p>
            </div>
          </form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};
export default Login;
