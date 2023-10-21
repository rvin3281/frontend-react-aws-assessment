import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .required("Email is Required")
    .email("Invalid Email Format"),
  password: yup.string().required("Password is Required"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is Required")
    .email("Invalid Email Format"),
  password: yup.string().required("Password is Required"),
});

export const addNewUser = yup.object({
  username: yup.string().required("Username is Required"),
  email: yup
    .string()
    .required("Email is Required")
    .email("Invalid email Format"),
  mobile: yup.string().required("Mobile Number is Required"),
  skillset: yup.string().required("Skillset is Required"),
  hobby: yup.string().required("Hobby is Required"),
});
