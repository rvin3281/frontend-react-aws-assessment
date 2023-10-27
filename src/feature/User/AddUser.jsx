// import { DevTool } from "@hookform/devtools";
import styled from "styled-components";
import { addNewUser } from "../../utils/formSchema";
import { toast } from "react-toastify";
import { useCustomForm } from "../../hooks/useCustomForm";
import { FormGroup, SubmitBtn } from "../../component/RegLoginForm";
import { Button } from "../../component/ButtonUI";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import baseUrl from "../../utils/baseURL";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .formContainer {
    margin: 0 auto;
    width: 100%;
  }

  @media (min-width: 768px) {
    .formContainer {
      margin: 0;
      max-width: 600px;
    }
  }
`;
const AddUser = () => {
  const { formState, register, handleSubmit, reset, control } =
    useCustomForm(addNewUser);

  const { errors, isValid } = formState;

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: postUser, isLoading } = useMutation({
    mutationFn: async (data) => {
      return await baseUrl.post("/users", data);
    },
    onSuccess: () => {
      toast.success("Thanks for Register");
      reset();
      navigate("viewuser");
      queryClient.invalidateQueries({ queryKey: ["allusers"] });
    },
  });

  const onSubmit = (data) => {
    postUser(data);
  };

  return (
    <Wrapper>
      <div>
        <h3>Add New User</h3>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="formContainer"
          noValidate
        >
          <FormGroup className="form-group">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-input"
              type="text"
              name="username"
              id="username"
              {...register("username")}
            />
            <p className="form-error">{errors.username?.message}</p>
          </FormGroup>
          <FormGroup className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              type="text"
              name="email"
              id="email"
              {...register("email")}
            />
            <p className="form-error">{errors.email?.message}</p>
          </FormGroup>
          <FormGroup className="form-group">
            <label className="form-label" htmlFor="mobile">
              Phone Number
            </label>
            <input
              className="form-input"
              type="text"
              name="mobile"
              id="mobile"
              {...register("mobile")}
            />
            <p className="form-error">{errors.mobile?.message}</p>
          </FormGroup>
          <FormGroup className="form-group">
            <label className="form-label" htmlFor="name">
              SkillSet
            </label>
            <input
              className="form-input"
              type="text"
              name="skillset"
              id="skillset"
              {...register("skillset")}
            />
            <p className="form-error">{errors.skillset?.message}</p>
          </FormGroup>
          <FormGroup className="form-group">
            <label className="form-label" htmlFor="name">
              Hobby
            </label>
            <input
              className="form-input"
              type="text"
              name="hobby"
              id="hobby"
              {...register("hobby")}
            />
            <p className="form-error">{errors.hobby?.message}</p>
          </FormGroup>

          <SubmitBtn>
            <Button disabled={!isValid} variant="primary">
              Submit
            </Button>
          </SubmitBtn>
        </form>
      </div>
    </Wrapper>
  );
};
export default AddUser;
