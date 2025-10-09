import * as Yup from "yup";

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginValidation = Yup.object({
  email: Yup.string().required("Name is required"),
  password: Yup.string().required("Password is required"),
});

export const changePasswordInitialValues = {
  password: "",
  confirmPassword: "",
};

export const changePasswordValidation = Yup.object({
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("confirmPassword is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
