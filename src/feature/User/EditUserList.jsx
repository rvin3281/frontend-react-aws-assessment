import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import baseUrl from "./../../utils/baseURL";
import styled from "styled-components";
import { toast } from "react-toastify";
import { FormGroup, SubmitBtn } from "../../component/RegLoginForm";
import { Button } from "../../component/ButtonUI";
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

const EditUserList = ({ singleUserData, userId }) => {
  // CONFIG FORM
  const { register, handleSubmit, formState } = useForm({
    mode: "onTouched",
  });

  const { isValid } = formState;

  // React query
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: async ({ data, userId }) =>
      await baseUrl.patch(`/users/${userId}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["singleUser", userId] });
      queryClient.invalidateQueries({ queryKey: ["allusers"] });
      toast.success("Edited Successfully");
      navigate("/dashboard/viewuser");
    },
    onError: (error) => {
      // NOTE : THIS ERROR RETURN FROM THE AXIOS
      toast.error("Failed! Please Try Again");
      console.log(error);
    },
  });

  const onSubmit = (data) => {
    updateUser({ data, userId });
  };

  return (
    <Wrapper>
      <div>
        <h3>Edit User</h3>
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
              defaultValue={singleUserData.username}
              {...register("username")}
            />
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
              defaultValue={singleUserData.email}
              {...register("email")}
            />
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
              defaultValue={singleUserData.mobile}
              {...register("mobile")}
            />
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
              defaultValue={singleUserData.skillset}
              {...register("skillset")}
            />
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
              defaultValue={singleUserData.hobby}
              {...register("hobby")}
            />
          </FormGroup>

          <SubmitBtn>
            <Button disabled={!isValid} variant="primary">
              {isLoading ? "Loading.." : "Edit User"}
            </Button>
          </SubmitBtn>
        </form>
      </div>
    </Wrapper>
  );
};
export default EditUserList;
