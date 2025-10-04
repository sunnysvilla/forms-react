import * as Yup from "yup";

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginValidation = Yup.object({
  email: Yup.string().required("Name is required"),
  password: Yup.string().required("Mail is required"),
});
